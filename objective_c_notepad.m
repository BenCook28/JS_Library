//
//  moduleCustodian.swift
//  ezinspect
//
//  Created by Albert Hart on 12/20/16.
//
//

import Foundation
import WebKit

public class moduleCustodian: NSObject
	
{
	// Singleton instance
	static let sharedInstance = moduleCustodian();
	
	// NSURLSession & task variable used to download the modules JSON
	let retrievalSession = URLSession(configuration: URLSessionConfiguration.default)
	var retrievalTask: URLSessionDataTask?
	
	// Contains a dictionary for each module, keyed by module name
	var moduleStates: [String:Any]?
	
	private override init() {} //This prevents others from using the default '()' initializer for this class.
	
	// Retrieve the module states
	func retrieveModuleStates()
	{
		//If we have any previously saved modules data, open that first
		openSavedModulesData();
		
		let state = appState.shared() as appState;
		state.storeCookies();
		
		//Check if we have an internet connection -- otherwise, silently skip download
		if appState.shared().canReachInternet()
		{
		
			// Retrieve JSON of module information from: check_modules.php
			if let address:String = state.serverAddress(ofPage: "check_modules.php?return_json=1")
			{
				if let modulesURL: URL = URL(string: address)
				{
					
					retrievalTask = retrievalSession.dataTask(with: modulesURL) {
						data, response, error in
						
						if let err = error
						{
							appState.showAlertMessage(err.localizedDescription, title: "Error retrieving module informaton")
						}
						else if let httpResponse = response as? HTTPURLResponse
						{
							if (httpResponse.statusCode == 200)
							{
								if let dt = data
								{
									// Download successful -- parse the data
									self.receivedModulesData(data: dt);
								}
							}
							else
							{
								appState.showAlertMessage("Received error status \(httpResponse.statusCode) from server.", title: "Error retrieving module informaton")
							}
						}
					}
					retrievalTask?.resume()
				}
			}
		}
		
	}
	
	// Saves and opens the modules NSData (should contain JSON) retrieved from server.
	func receivedModulesData(data: Data)
	{
		saveModulesData(data: data);
		openModulesData(data: data);
	}
	
	// Parses the modules from the NSData.
	func openModulesData(data: Data)
	{
		//Try to parse the data as JSON
		do {
			let jsval = try JSONSerialization.jsonObject(with: data, options: [])
			if let jsdict = jsval as? [String:Any]
			{
				// Set the module data
				moduleStates = jsdict;
				
				// Inform appState
				let state = appState.shared() as appState;
				
				let item:appActionItem = appActionItem.init(id: APP_ACTION_MODULES_UPDATED, label: "Modules Updated")
				state.perform(item)
			}
			else
			{
				appState.showAlertMessage("Unable to retrieve modules. JSON response has incorrect contents.", title: "Modules Error")
			}
		}
		catch let error as NSError
		{
			appState.showAlertMessage("Unable to retrieve modules. Could not parse the JSON file. Error: \(error.localizedDescription)", title: "Modules Error")
		}
	}
	
	func saveModulesData(data: Data)
	{
		if let privFolder = appState.createUserFolder("privileges", excludeFromICloud: true)
		{
			let privURL = URL(fileURLWithPath: privFolder, isDirectory: true)
			let modulesURL = privURL.appendingPathComponent("modules.json");
			do {
				try data.write(to: modulesURL);
				//print("Saved modules to \(modulesURL.path)");
			}
			catch let error as NSError
			{
				appState.showAlertMessage("Unable to save modules file. Error:\(error.localizedDescription)", title: "Modules Error");
			}
		}
	}
	
	func openSavedModulesData()
	{
		if let privFolder = appState.getUserFolder("privileges")
		{
			let privURL = URL(fileURLWithPath: privFolder, isDirectory: true)
			let modulesURL = privURL.appendingPathComponent("modules.json")
			if (FileManager.default.fileExists(atPath: modulesURL.path))
			{
				do {
					let data : Data = try Data.init(contentsOf: modulesURL)
					openModulesData(data: data)
				}
				catch let error as NSError
				{
					appState.showAlertMessage("Unable to open modules file. Error:\(error.localizedDescription)", title: "Modules Error");
				}
			}
			else
			{
				// We don't have any saved modules data -- update side drawer to reflect no available modules, until we can download them
				let item:appActionItem = appActionItem.init(id: APP_ACTION_MODULES_UPDATED, label: "Modules Updated")
				let state = appState.shared() as appState
				state.perform(item);
			}
		}
	}
	
	// Checks is a particular module is accesible
	func moduleIsAccessible(name: String) -> Bool
	{
		if (moduleStates == nil)
		{
			return false
		}
		
		if let modDict = moduleStates![name] as? [String:Any]
		{
			if let access = modDict["access"] as? String
			{
				if (access == "1")
				{
					return true;
				}
			}
			if let access = modDict["access"] as? Int
			{
				if (access == 1)
				{
					return true;
				}
			}
		}
		
		return false
	}
	
	func moduleValue(module: String, key: String) -> String
	{
		if (moduleStates == nil)
		{
			return ""
		}
		
		var outVal: String = "";
		if let modDict = moduleStates![module] as? [String:Any]
		{
			var access : Bool = false;
			if let accessVal = modDict["access"] as? String
			{
				if (accessVal == "1")
				{
					access = true;
				}
			}
			if let accessVal = modDict["access"] as? Int
			{
				if (accessVal == 1)
				{
					access = true;				}
			}
			
			if (access)
			{
				if let keyVal = modDict[key] as? String
				{
					outVal = keyVal;
				}
			}
		}
		
		return outVal
	}
}

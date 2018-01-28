// When querying objects,
// we can use raw:true
// in the findAll query
// to work with and output
// data without manipulation
// as shown in the exmaple below:

// db.Sections.findAll({
// 	where: {
// 		id: { [Op.in]: sectionIds }
// 	},
// 	raw: true,
// 	include: [
// 		{
// 			model: db.Subcategories,
// 			include: [
// 				{
// 					model: db.Categories
// 				}
// 			]
// 		}
// 	]
// });

// In Sequelize, we need to put 
// single quotes around object
// properties we try to access
// as shown below:

// section['Subcategory.name']
// We can conditionally render
// using React Native's ActivityIndicator
// as shown below:

// render() {
//     if (this.state.loading) {
//       return (
//         <View style={styles.container}>
//           <ActivityIndicator />
//         </View>
//       )
//     } else {
//       groops = [];
//       if (Object.keys(this.state.groops).length > 0) {
//         groops = Object.values(this.state.groops);
//       }
//       return (
//         <View style={styles.container}>
//           <ScrollView style={styles.scrollContainer}>
//             <Header title="Choose a Groop for the Game" />
//             <ChooseGroopList groops={groops} />
//           </ScrollView>
//         </View>
//       );
//     }
//   }
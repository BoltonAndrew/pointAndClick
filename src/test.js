const helloWorld = (args) => {
  try {
    switch (args[2]) {
      case "hello":
        console.log("Hello World!");
    }
  } catch (error) {
    console.log(error);
  }
};
helloWorld(process.argv);

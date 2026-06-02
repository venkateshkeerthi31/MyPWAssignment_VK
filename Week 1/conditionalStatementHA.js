//Launch Browser

function launchBrowser(browserName){

    if (browserName==="Chrome"){
        console.log("Chrome browser is launched")
    }else{
        console.log("Chrome browser is not lauched")
    }

}

launchBrowser("Chrome")

//runTests

function runTests(TestType){

    switch (TestType) {
        case "Sanity":
            console.log("Running Sanity test")
        break;
        case "Regression":
            console.log("Running Regression test ")
        break;
        default:
            console.log("Running Smoke test")
            break;
    }
}

runTests("test")
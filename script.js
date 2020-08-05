var app = angular.module('myApp', []);
app.controller('customersCtrl', function ($scope, $http) {
	statenameArray = [];
    $scope.statedata = localStorage.getItem("statename");
	$http.get("https://api.covid19india.org/state_district_wise.json")
            .then(function (response) {
                $scope.statesdetailsIndia = response.data;
                for (var key in $scope.statesdetailsIndia) {
                    if ($scope.statesdetailsIndia.hasOwnProperty(key)) {
                        var x = key.replace(/ /g, "-");
                        statenameArray.push({
                            field: x,
                            subType: $scope.statesdetailsIndia[key]
                        });
                    }
                }
                var stateclickArray = [];              
                    $scope.statesjsonData = statenameArray[16].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            //console.log('key', key);
                            console.log('value', $scope.statesjsonData[key].confirmed);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
             
			});
			
			$http.get("https://api.covid19india.org/data.json")
        .then(function (response) {
            $scope.stateKa = response.data.statewise[4].confirmed;
		});
    $scope.getCSSClass = function() {
        return "active";
     }  
    $scope.mapClick = function () {
        $scope.map = true;
        $scope.getCSSClass = function() {
            return "!active";         
         }  
         $scope.getCSSClass2 = function() {
            return "active";
         }  
    };
    $scope.dStatusClick = function () {
        $scope.map = false;
        $scope.getCSSClass2 = function() {
            return "!active";     
         }  
         $scope.getCSSClass = function() {
            return "active";
         }  
    };
    $scope.getState = function () {
        statenameArray = [];
        $scope.statedata = localStorage.getItem("statename");

        $http.get("https://api.covid19india.org/state_district_wise.json")
            .then(function (response) {
                $scope.statesdetailsIndia = response.data;
                for (var key in $scope.statesdetailsIndia) {
                    if ($scope.statesdetailsIndia.hasOwnProperty(key)) {
                        var x = key.replace(/ /g, "-");
                        statenameArray.push({
                            field: x,
                            subType: $scope.statesdetailsIndia[key]
                        });
                    }
                }
                var stateclickArray = [];
                if ($scope.statedata == 'Rajasthan') {
                    $scope.statesjsonData = statenameArray[29].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }
                else if ($scope.statedata == 'Bihar') {
                    $scope.statesjsonData = statenameArray[5].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }
                else if ($scope.statedata == 'Andhra-Pradesh') {
                    $scope.statesjsonData = statenameArray[2].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }

                else if ($scope.statedata == 'Arunachal-Pradesh') {
                    $scope.statesjsonData = statenameArray[3].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }
                else if ($scope.statedata == 'Assam') {
                    $scope.statesjsonData = statenameArray[4].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }

                else if ($scope.statedata == 'Chhattisgarh') {
                    $scope.statesjsonData = statenameArray[7].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }
                else if ($scope.statedata == 'Goa') {
                    $scope.statesjsonData = statenameArray[10].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }
                else if ($scope.statedata == 'Gujarat') {
                    $scope.statesjsonData = statenameArray[11].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }
                else if ($scope.statedata == 'Himachal-Pradesh') {
                    $scope.statesjsonData = statenameArray[12].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }
                else if ($scope.statedata == 'Haryana') {
                    $scope.statesjsonData = statenameArray[13].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }
                else if ($scope.statedata == 'Jharkhand') {
                    $scope.statesjsonData = statenameArray[14].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }
                else if ($scope.statedata == 'Jammu-and-Kashmir') {
                    $scope.statesjsonData = statenameArray[15].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }
                else if ($scope.statedata == 'Karnataka') {
                    $scope.statesjsonData = statenameArray[16].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }
                else if ($scope.statedata == 'Kerala') {
                    $scope.statesjsonData = statenameArray[17].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }
                else if ($scope.statedata == 'Lakshadweep') {
                    $scope.statesjsonData = statenameArray[19].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }
                else if ($scope.statedata == 'Maharashtra') {
                    $scope.statesjsonData = statenameArray[20].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }
                else if ($scope.statedata == 'Meghalaya') {
                    $scope.statesjsonData = statenameArray[21].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }
                else if ($scope.statedata == 'Manipur') {
                    $scope.statesjsonData = statenameArray[22].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }
                else if ($scope.statedata == 'Madhya-Pradesh') {
                    $scope.statesjsonData = statenameArray[23].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }
                else if ($scope.statedata == 'Mizoram') {
                    $scope.statesjsonData = statenameArray[24].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }
                else if ($scope.statedata == 'Odisha') {
                    $scope.statesjsonData = statenameArray[26].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }
                else if ($scope.statedata == 'Punjab') {
                    $scope.statesjsonData = statenameArray[27].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }
                else if ($scope.statedata == 'Puducherry') {
                    $scope.statesjsonData = statenameArray[28].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }

                else if ($scope.statedata == 'Sikkim') {
                    $scope.statesjsonData = statenameArray[30].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }

                else if ($scope.statedata == 'Tamil-Nadu') {
                    $scope.statesjsonData = statenameArray[32].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }

                else if ($scope.statedata == 'Tripura') {
                    $scope.statesjsonData = statenameArray[33].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }

                else if ($scope.statedata == 'Uttar-Pradesh') {
                    $scope.statesjsonData = statenameArray[34].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }

                else if ($scope.statedata == 'West-Bengal') {
                    $scope.statesjsonData = statenameArray[36].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }

                else if ($scope.statedata == 'Delhi') {
                    $scope.statesjsonData = statenameArray[8].subType.districtData
                    console.log($scope.statesjsonData);
                    for (var key in $scope.statesjsonData) {
                        if ($scope.statesjsonData.hasOwnProperty(key)) {
                            console.log('key', key);
                            console.log('value', $scope.statesjsonData[key]);
                            stateclickArray.push({
                                field: key,
                                subType: $scope.statesjsonData[key],
                                recoveryrate: (($scope.statesjsonData[key].recovered/$scope.statesjsonData[key].confirmed)*100).toFixed(2)
                                /*
                                    This bit was close. You could could also cache the Object.keys in 
                                    another variable so its not called in every itteration of the loop if it doesnt change often
                                */

                            });
                        }
                    }
                    $scope.statename = stateclickArray;
                    console.log($scope.statename);
                }

                else {
                    $scope.statename = [];
                }
            });

    }
    $http.get("https://api.covid19india.org/data.json")
        .then(function (response) {
            $scope.jsonfarray = response.data.statewise;
            $scope.confirmedCases = response.data.statewise[0].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $scope.recoveredCases = response.data.statewise[0].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $scope.recoveryRate = ((response.data.statewise[0].recovered / response.data.statewise[0].confirmed) * 100).toFixed(2);
            $scope.getcasetimeseries = response.data.cases_time_series;
            $scope.data2Array = [];
            console.log($scope.recoveryRate);
            for (var i = 0; i < $scope.getcasetimeseries.length; i++) {
                $scope.data2res = response.data.cases_time_series[i].dailyconfirmed;
                $scope.data2Array.push($scope.data2res);
            }
            $scope.xaxisdata = [];
            for (var i = 0; i < $scope.getcasetimeseries.length; i++) {
                $scope.data3res = response.data.cases_time_series[i].date;
                $scope.xaxisdata.push($scope.data3res);
            }

            $scope.recoveredArray = [];
            for (var i = 0; i < $scope.getcasetimeseries.length; i++) {
                $scope.data4res = response.data.cases_time_series[i].dailyrecovered;
                $scope.recoveredArray.push($scope.data4res);
            }

            var mah = $scope.jsonfarray.filter(function (item) {
                return item.state == 'Maharashtra';
            });
            var MH = Number(mah[0].confirmed);

            var tamil = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'TN';
            });
            var TN = Number(tamil[0].confirmed);


            var delhi = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'DL';
            });
            var DL = Number(delhi[0].confirmed);

            var Gujarat = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'GJ';
            });
            var GJ = Number(Gujarat[0].confirmed);

            var Karnataka = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'KA';
            });
            var KA = Number(Karnataka[0].confirmed);

            var UPR = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'UP';
            });
            var UP = Number(UPR[0].confirmed);

            var Telangana = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'TG';
            });
            var TG = Number(Telangana[0].confirmed);

            var Andhra = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'AP';
            });
            var AP = Number(Andhra[0].confirmed);

            var WestBengal = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'WB';
            });
            var WB = Number(WestBengal[0].confirmed);

            var Rajasthan = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'RJ';
            });
            var RJ = Number(Rajasthan[0].confirmed);

            var Haryana = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'HR';
            });
            var HR = Number(Haryana[0].confirmed);

            var Bihar = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'BR';
            });
            var BR = Number(Bihar[0].confirmed);

            var mpradesh = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'MP';
            });
            var MP = Number(mpradesh[0].confirmed);

            var Assam = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'AS';
            });
            var AS = Number(Assam[0].confirmed);

            var Odisha = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'OR';
            });
            var OR = Number(Odisha[0].confirmed);

            var Jammu = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'JK';
            });
            var JK = Number(Jammu[0].confirmed);

            var Punjab = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'PB';
            });
            var PB = Number(Punjab[0].confirmed);

            var Kerala = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'KL';
            });
            var KL = Number(Kerala[0].confirmed);

            var Chhattisgarh = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'CT';
            });
            var CT = Number(Chhattisgarh[0].confirmed);

            var Jharkhand = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'JH';
            });
            var JH = Number(Jharkhand[0].confirmed);

            var Uttarakhand = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'UT';
            });
            var UT = Number(Uttarakhand[0].confirmed);

            var Goa = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'GA';
            });
            var GA = Number(Goa[0].confirmed);

            var Unassigned = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'UN';
            });
            var UN = Number(Unassigned[0].confirmed);

            var Tripura = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'TR';
            });
            var TR = Number(Tripura[0].confirmed);

            var Manipur = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'MN';
            });
            var MN = Number(Manipur[0].confirmed);

            var Puducherry = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'PY';
            });
            var PY = Number(Puducherry[0].confirmed);

            var Himachal = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'HP';
            });
            var HP = Number(Himachal[0].confirmed);

            var Ladakh = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'LA';
            });
            var LA = Number(Ladakh[0].confirmed);

            var Nagaland = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'NL';
            });
            var NL = Number(Nagaland[0].confirmed);

            var Chandigarh = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'CH';
            });
            var CH = Number(Chandigarh[0].confirmed);

            var Dadra = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'DN';
            });
            var DN = Number(Dadra[0].confirmed);


            var Arunachal = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'AR';
            });
            var AR = Number(Arunachal[0].confirmed);

            var Meghalaya = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'ML';
            });
            var ML = Number(Meghalaya[0].confirmed);

            var Mizoram = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'MZ';
            });
            var MZ = Number(Mizoram[0].confirmed);

            var Andaman = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'AN';
            });
            var AN = Number(Andaman[0].confirmed);

            var Sikkim = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'SK';
            });
            var SK = Number(Sikkim[0].confirmed);

            var Lakshadweep = $scope.jsonfarray.filter(function (item) {
                return item.statecode == 'LD';
            });
            var LD = Number(Lakshadweep[0].confirmed);

            var jsonarray = [["in-py", PY], ["in-ld", LD], ["in-wb", WB], ["in-or", OR], ["in-br", BR], ["in-sk", SK], ["in-ct", CT], ["in-tn", TN], ["in-mp", MP], ["in-2984", GJ], ["in-ga", GA], ["in-nl", NL], ["in-mn", MN], ["in-ar", AR], ["in-mz", MZ], ["in-tr", TR], ["in-3464", DN], ["in-dl", DL], ["in-hr", HR], ["in-ch", CH], ["in-hp", HP], ["in-jk", JK], ["in-kl", KL], ["in-ka", KA], ["in-dn", DN], ["in-mh", MH], ["in-as", AS], ["in-ap", AP], ["in-ml", ML], ["in-pb", PB], ["in-rj", RJ], ["in-up", UP], ["in-ut", UT], ["in-jh", JH]];
            console.log(jsonarray) // 1898
            Highcharts.setOptions({
                lang: {
                    thousandsSep: ','
                }
            })
            Highcharts.mapChart('container', {
                chart: {
                    map: 'countries/in/in-all',
                    margin: [30, 10, 0, 0]
                
                },

                title: {
                    text: 'Count of the Covid19 Confirmed Cases in India'
                },

                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                mapNavigation: {
                    enabled: true,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },

                colorAxis: {
                    min: 0
                },

                plotOptions: {
                    series: {
                        events: {
                            click: function (e) {
                                $(".statename").html(e.point.name);
                                $(".count b").html(e.point.value);
                                console.log(e.point.name)
                                if (e.point.name === 'Orissa') {
                                    var pointName = 'Odisha';
                                    console.log(pointName)
                                    localStorage.setItem("statename", pointName);
                                }
                                else {
                                    var pointName = e.point.name.replace(/ /g, "-");
                                    var pointVal = e.point.value;
                                    localStorage.setItem("statename", pointName);

                                }
                                $(".get-details").click()
                                /* var text = '<b>Clicked</b><br>Series: ' + this.name +
                                         '<br>Point: ' + e.point.name + ' (' + e.point.value + '/km²)';
                                 if (!this.chart.clickLabel) {
                                     this.chart.clickLabel = this.chart.renderer.label(text, 0, 250).css({
                                             width: '180px'
                                         })
                                         .add();
                                         
                                 } else {
                                     this.chart.clickLabel.attr({
                                         text: text
                                     });
                                 }
                                 */

                            }
                        }
                    }
                },

                series: [{
                    data: jsonarray,
                    name: 'Confirmed Cases',
                    states: {
                        hover: {
                            color: '#BADA55'
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}',
                        style: {
                            textOutline: 'false',
                            fontWeight: 'normal',
                            fontSize: '7px',
                            //cursor: 'pointer'

                        }
                    },



                }]
            });

            /* Line Chart */

            Highcharts.chart('dailygraph', {

                chart: {
                    type: 'line'
                },
                title: {
                    text: 'Daily update of Covid19 confirmed cases'
                },
                xAxis: {
                    categories: $scope.xaxisdata,

                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Total confirmed cases'
                    }
                },
                legend: {
                    reversed: true
                },
                plotOptions: {
                    series: {
                        stacking: 'normal'
                    }
                },
                series: [{
                    name: 'confirmed',
                    data: $scope.data2Array.map(Number)
                },
                {
                    name: 'Recovered',
                    data: $scope.recoveredArray.map(Number)
                }
                ]

            });

        });
});
//directives
weatherApp.directive("weatherReport", function () {
    return {
        restrict: "E",
        templateUrl: "directives/weather_report.html",
        replace: true,
        scope: {
            weatherDay: "=" ,
            convertToStandard: "&",
            covertToDate: "&",
            dateFormat: "@ "
        }
    }
});
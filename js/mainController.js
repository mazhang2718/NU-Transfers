
angular.module('app', []);

angular.module('app').controller('mainCntrl', ['$scope', 
function ($scope) {

  $scope.master = {}; // MASTER DATA STORED BY YEAR

  $scope.selected_year = {}; //'Total';
  $scope.years = ['Total','2014-2015','2013-2014','2012-2013','2011-2012','2010-2011','2009-2010','2008-2009','2007-2008','2006-2007','2005-2006'];

  $scope.filters = {};
  $scope.hasFilters = false;

  $scope.tooltip = {};

  // FORMATS USED IN TOOLTIP TEMPLATE IN HTML
  $scope.pFormat = d3.format(".1%");  // PERCENT FORMAT
  $scope.qFormat = d3.format(",.0f"); // COMMAS FOR LARGE NUMBERS

  $scope.updateTooltip = function (data) {
    $scope.tooltip = data;
    $scope.$apply();
  }

  $scope.addFilter = function (name) {
    $scope.hasFilters = true;
    $scope.filters[name] = {
      name: name,
      hide: true
    };
    $scope.$apply();
  };

  $scope.update = function () {
    var data = $scope.master[$scope.selected_year];

    if (data && $scope.hasFilters) {
      $scope.drawChords(data.filter(function (d) {
        var fl = $scope.filters;
        var v1 = d.importer1, v2 = d.importer2;

        if ((fl[v1] && fl[v1].hide) || (fl[v2] && fl[v2].hide)) {
          return false;
        }
        return true;
      }));
    } else if (data) {
      $scope.drawChords(data);
    }
  };

var trade = [

  //Total

  {
    "year": "Total",
    "importer1": "Communication",
    "importer2": "SESP",
    "flow1": 33,
    "flow2": 57
  },

  {
    "year": "Total",
    "importer1": "Communication",
    "importer2": "McCormick",
    "flow1": 51,
    "flow2": 15
  },

   {
    "year": "Total",
    "importer1": "Communication",
    "importer2": "Medill",
    "flow1": 64,
    "flow2": 25
  },

  {
    "year": "Total",
    "importer1": "Communication",
    "importer2": "Bienen",
    "flow1": 27,
    "flow2": 7
  },

  {
    "year": "Total",
    "importer1": "Communication",
    "importer2": "Weinberg",
    "flow1": 1047,
    "flow2": 214
  },

   {
    "year": "Total",
    "importer1": "SESP",
    "importer2": "McCormick",
    "flow1": 38,
    "flow2": 4
  },

   {
    "year": "Total",
    "importer1": "SESP",
    "importer2": "Medill",
    "flow1": 44,
    "flow2": 5
  },

   {
    "year": "Total",
    "importer1": "SESP",
    "importer2": "Bienen",
    "flow1": 7,
    "flow2": 1
  },

   {
    "year": "Total",
    "importer1": "SESP",
    "importer2": "Weinberg",
    "flow1": 865,
    "flow2": 116
  },

  {
    "year": "Total",
    "importer1": "McCormick",
    "importer2": "Medill",
    "flow1": 2,
    "flow2": 9
  },


  {
    "year": "Total",
    "importer1": "McCormick",
    "importer2": "Bienen",
    "flow1": 2,
    "flow2": 2
  },

  {
    "year": "Total",
    "importer1": "McCormick",
    "importer2": "Weinberg",
    "flow1": 387,
    "flow2": 435
  },

  {
    "year": "Total",
    "importer1": "Medill",
    "importer2": "Bienen",
    "flow1": 2,
    "flow2": 0
  },

  {
    "year": "Total",
    "importer1": "Medill",
    "importer2": "Weinberg",
    "flow1": 128,
    "flow2": 154
  },

   {
    "year": "Total",
    "importer1": "Bienen",
    "importer2": "Weinberg",
    "flow1": 24,
    "flow2": 43
  },

//2014-2015

  {
    "year": "2014-2015",
    "importer1": "Communication",
    "importer2": "SESP",
    "flow1": 4,
    "flow2": 2
  },

  {
    "year": "2014-2015",
    "importer1": "Communication",
    "importer2": "McCormick",
    "flow1": 5,
    "flow2": 3
  },

   {
    "year": "2014-2015",
    "importer1": "Communication",
    "importer2": "Medill",
    "flow1": 7,
    "flow2": 2
  },

  {
    "year": "2014-2015",
    "importer1": "Communication",
    "importer2": "Bienen",
    "flow1": 3,
    "flow2": 0
  },

  {
    "year": "2014-2015",
    "importer1": "Communication",
    "importer2": "Weinberg",
    "flow1": 75,
    "flow2": 24
  },

   {
    "year": "2014-2015",
    "importer1": "SESP",
    "importer2": "McCormick",
    "flow1": 6,
    "flow2": 1
  },

   {
    "year": "2014-2015",
    "importer1": "SESP",
    "importer2": "Medill",
    "flow1": 0,
    "flow2": 0
  },

   {
    "year": "2014-2015",
    "importer1": "SESP",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 0
  },

   {
    "year": "2014-2015",
    "importer1": "SESP",
    "importer2": "Weinberg",
    "flow1": 94,
    "flow2": 20
  },

  {
    "year": "2014-2015",
    "importer1": "McCormick",
    "importer2": "Medill",
    "flow1": 0,
    "flow2": 3
  },


  {
    "year": "2014-2015",
    "importer1": "McCormick",
    "importer2": "Bienen",
    "flow1": 1,
    "flow2": 1
  },

  {
    "year": "2014-2015",
    "importer1": "McCormick",
    "importer2": "Weinberg",
    "flow1": 60,
    "flow2": 41
  },

  {
    "year": "2014-2015",
    "importer1": "Medill",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 0
  },

  {
    "year": "2014-2015",
    "importer1": "Medill",
    "importer2": "Weinberg",
    "flow1": 9,
    "flow2": 22
  },

   {
    "year": "2014-2015",
    "importer1": "Bienen",
    "importer2": "Weinberg",
    "flow1": 2,
    "flow2": 4
  },

//2013-2014

  {
    "year": "2013-2014",
    "importer1": "Communication",
    "importer2": "SESP",
    "flow1": 6,
    "flow2": 9
  },

  {
    "year": "2013-2014",
    "importer1": "Communication",
    "importer2": "McCormick",
    "flow1": 5,
    "flow2": 2
  },

   {
    "year": "2013-2014",
    "importer1": "Communication",
    "importer2": "Medill",
    "flow1": 8,
    "flow2": 2
  },

  {
    "year": "2013-2014",
    "importer1": "Communication",
    "importer2": "Bienen",
    "flow1": 4,
    "flow2": 0
  },

  {
    "year": "2013-2014",
    "importer1": "Communication",
    "importer2": "Weinberg",
    "flow1": 86,
    "flow2": 19
  },

   {
    "year": "2013-2014",
    "importer1": "SESP",
    "importer2": "McCormick",
    "flow1": 2,
    "flow2": 0
  },

   {
    "year": "2013-2014",
    "importer1": "SESP",
    "importer2": "Medill",
    "flow1": 4,
    "flow2": 0
  },

   {
    "year": "2013-2014",
    "importer1": "SESP",
    "importer2": "Bienen",
    "flow1": 2,
    "flow2": 0
  },

   {
    "year": "2013-2014",
    "importer1": "SESP",
    "importer2": "Weinberg",
    "flow1": 105,
    "flow2": 17
  },

  {
    "year": "2013-2014",
    "importer1": "McCormick",
    "importer2": "Medill",
    "flow1": 0,
    "flow2": 1
  },


  {
    "year": "2013-2014",
    "importer1": "McCormick",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 0
  },

  {
    "year": "2013-2014",
    "importer1": "McCormick",
    "importer2": "Weinberg",
    "flow1": 70,
    "flow2": 35
  },

  {
    "year": "2013-2014",
    "importer1": "Medill",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 0
  },

  {
    "year": "2013-2014",
    "importer1": "Medill",
    "importer2": "Weinberg",
    "flow1": 16,
    "flow2": 19
  },

   {
    "year": "2013-2014",
    "importer1": "Bienen",
    "importer2": "Weinberg",
    "flow1": 2,
    "flow2": 5
  },

  //2012-2013

  {
    "year": "2012-2013",
    "importer1": "Communication",
    "importer2": "SESP",
    "flow1": 3,
    "flow2": 3
  },

  {
    "year": "2012-2013",
    "importer1": "Communication",
    "importer2": "McCormick",
    "flow1": 4,
    "flow2": 0
  },

   {
    "year": "2012-2013",
    "importer1": "Communication",
    "importer2": "Medill",
    "flow1": 3,
    "flow2": 6
  },

  {
    "year": "2012-2013",
    "importer1": "Communication",
    "importer2": "Bienen",
    "flow1": 5,
    "flow2": 3
  },

  {
    "year": "2012-2013",
    "importer1": "Communication",
    "importer2": "Weinberg",
    "flow1": 100,
    "flow2": 21
  },

   {
    "year": "2012-2013",
    "importer1": "SESP",
    "importer2": "McCormick",
    "flow1": 5,
    "flow2": 1
  },

   {
    "year": "2012-2013",
    "importer1": "SESP",
    "importer2": "Medill",
    "flow1": 5,
    "flow2": 2
  },

   {
    "year": "2012-2013",
    "importer1": "SESP",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 0
  },

   {
    "year": "2012-2013",
    "importer1": "SESP",
    "importer2": "Weinberg",
    "flow1": 102,
    "flow2": 10
  },

  {
    "year": "2012-2013",
    "importer1": "McCormick",
    "importer2": "Medill",
    "flow1": 0,
    "flow2": 0
  },

  {
    "year": "2012-2013",
    "importer1": "McCormick",
    "importer2": "Bienen",
    "flow1": 1,
    "flow2": 0
  },

  {
    "year": "2012-2013",
    "importer1": "McCormick",
    "importer2": "Weinberg",
    "flow1": 51,
    "flow2": 36
  },

  {
    "year": "2012-2013",
    "importer1": "Medill",
    "importer2": "Bienen",
    "flow1": 1,
    "flow2": 0
  },

  {
    "year": "2012-2013",
    "importer1": "Medill",
    "importer2": "Weinberg",
    "flow1": 17,
    "flow2": 15
  },

   {
    "year": "2012-2013",
    "importer1": "Bienen",
    "importer2": "Weinberg",
    "flow1": 1,
    "flow2": 4
  },

//2011-2012

  {
    "year": "2011-2012",
    "importer1": "Communication",
    "importer2": "SESP",
    "flow1": 2,
    "flow2": 7
  },

  {
    "year": "2011-2012",
    "importer1": "Communication",
    "importer2": "McCormick",
    "flow1": 5,
    "flow2": 4
  },

   {
    "year": "2011-2012",
    "importer1": "Communication",
    "importer2": "Medill",
    "flow1": 5,
    "flow2": 2
  },

  {
    "year": "2011-2012",
    "importer1": "Communication",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 0
  },

  {
    "year": "2011-2012",
    "importer1": "Communication",
    "importer2": "Weinberg",
    "flow1": 82,
    "flow2": 20
  },

   {
    "year": "2011-2012",
    "importer1": "SESP",
    "importer2": "McCormick",
    "flow1": 3,
    "flow2": 0
  },

   {
    "year": "2011-2012",
    "importer1": "SESP",
    "importer2": "Medill",
    "flow1": 4,
    "flow2": 0
  },

   {
    "year": "2011-2012",
    "importer1": "SESP",
    "importer2": "Bienen",
    "flow1": 1,
    "flow2": 0
  },

   {
    "year": "2011-2012",
    "importer1": "SESP",
    "importer2": "Weinberg",
    "flow1": 85,
    "flow2": 8
  },

  {
    "year": "2011-2012",
    "importer1": "McCormick",
    "importer2": "Medill",
    "flow1": 1,
    "flow2": 1
  },

  {
    "year": "2011-2012",
    "importer1": "McCormick",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 1
  },

  {
    "year": "2011-2012",
    "importer1": "McCormick",
    "importer2": "Weinberg",
    "flow1": 37,
    "flow2": 51
  },

  {
    "year": "2011-2012",
    "importer1": "Medill",
    "importer2": "Bienen",
    "flow1": 1,
    "flow2": 0
  },

  {
    "year": "2011-2012",
    "importer1": "Medill",
    "importer2": "Weinberg",
    "flow1": 11,
    "flow2": 13
  },

   {
    "year": "2011-2012",
    "importer1": "Bienen",
    "importer2": "Weinberg",
    "flow1": 4,
    "flow2": 5
  },

  //2010-2011

    {
    "year": "2010-2011",
    "importer1": "Communication",
    "importer2": "SESP",
    "flow1": 2,
    "flow2": 4
  },

  {
    "year": "2010-2011",
    "importer1": "Communication",
    "importer2": "McCormick",
    "flow1": 5,
    "flow2": 0
  },

   {
    "year": "2010-2011",
    "importer1": "Communication",
    "importer2": "Medill",
    "flow1": 11,
    "flow2": 2
  },

  {
    "year": "2010-2011",
    "importer1": "Communication",
    "importer2": "Bienen",
    "flow1": 4,
    "flow2": 0
  },

  {
    "year": "2010-2011",
    "importer1": "Communication",
    "importer2": "Weinberg",
    "flow1": 102,
    "flow2": 14
  },

   {
    "year": "2010-2011",
    "importer1": "SESP",
    "importer2": "McCormick",
    "flow1": 5,
    "flow2": 1
  },

   {
    "year": "2010-2011",
    "importer1": "SESP",
    "importer2": "Medill",
    "flow1": 5,
    "flow2": 0
  },

   {
    "year": "2010-2011",
    "importer1": "SESP",
    "importer2": "Bienen",
    "flow1": 2,
    "flow2": 1
  },

   {
    "year": "2010-2011",
    "importer1": "SESP",
    "importer2": "Weinberg",
    "flow1": 84,
    "flow2": 11
  },

  {
    "year": "2010-2011",
    "importer1": "McCormick",
    "importer2": "Medill",
    "flow1": 0,
    "flow2": 0
  },

  {
    "year": "2010-2011",
    "importer1": "McCormick",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 0
  },

  {
    "year": "2010-2011",
    "importer1": "McCormick",
    "importer2": "Weinberg",
    "flow1": 41,
    "flow2": 41
  },

  {
    "year": "2010-2011",
    "importer1": "Medill",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 0
  },

  {
    "year": "2010-2011",
    "importer1": "Medill",
    "importer2": "Weinberg",
    "flow1": 13,
    "flow2": 18
  },

   {
    "year": "2010-2011",
    "importer1": "Bienen",
    "importer2": "Weinberg",
    "flow1": 4,
    "flow2": 6
  },

  //2009-2010

    {
    "year": "2009-2010",
    "importer1": "Communication",
    "importer2": "SESP",
    "flow1": 5,
    "flow2": 6
  },

  {
    "year": "2009-2010",
    "importer1": "Communication",
    "importer2": "McCormick",
    "flow1": 3,
    "flow2": 1
  },

   {
    "year": "2009-2010",
    "importer1": "Communication",
    "importer2": "Medill",
    "flow1": 8,
    "flow2": 2
  },

  {
    "year": "2009-2010",
    "importer1": "Communication",
    "importer2": "Bienen",
    "flow1": 4,
    "flow2": 3
  },

  {
    "year": "2009-2010",
    "importer1": "Communication",
    "importer2": "Weinberg",
    "flow1": 110,
    "flow2": 34
  },

   {
    "year": "2009-2010",
    "importer1": "SESP",
    "importer2": "McCormick",
    "flow1": 1,
    "flow2": 1
  },

   {
    "year": "2009-2010",
    "importer1": "SESP",
    "importer2": "Medill",
    "flow1": 8,
    "flow2": 0
  },

   {
    "year": "2009-2010",
    "importer1": "SESP",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 0
  },

   {
    "year": "2009-2010",
    "importer1": "SESP",
    "importer2": "Weinberg",
    "flow1": 103,
    "flow2": 17
  },

  {
    "year": "2009-2010",
    "importer1": "McCormick",
    "importer2": "Medill",
    "flow1": 0,
    "flow2": 1
  },

  {
    "year": "2009-2010",
    "importer1": "McCormick",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 0
  },

  {
    "year": "2009-2010",
    "importer1": "McCormick",
    "importer2": "Weinberg",
    "flow1": 38,
    "flow2": 44
  },

  {
    "year": "2009-2010",
    "importer1": "Medill",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 0
  },

  {
    "year": "2009-2010",
    "importer1": "Medill",
    "importer2": "Weinberg",
    "flow1": 11,
    "flow2": 12
  },

   {
    "year": "2009-2010",
    "importer1": "Bienen",
    "importer2": "Weinberg",
    "flow1": 3,
    "flow2": 5
  },

//2008-2009

    {
    "year": "2008-2009",
    "importer1": "Communication",
    "importer2": "SESP",
    "flow1": 2,
    "flow2": 9
  },

  {
    "year": "2008-2009",
    "importer1": "Communication",
    "importer2": "McCormick",
    "flow1": 7,
    "flow2": 2
  },

   {
    "year": "2008-2009",
    "importer1": "Communication",
    "importer2": "Medill",
    "flow1": 8,
    "flow2": 4
  },

  {
    "year": "2008-2009",
    "importer1": "Communication",
    "importer2": "Bienen",
    "flow1": 1,
    "flow2": 1
  },

  {
    "year": "2008-2009",
    "importer1": "Communication",
    "importer2": "Weinberg",
    "flow1": 130,
    "flow2": 20
  },

   {
    "year": "2008-2009",
    "importer1": "SESP",
    "importer2": "McCormick",
    "flow1": 2,
    "flow2": 0
  },

   {
    "year": "2008-2009",
    "importer1": "SESP",
    "importer2": "Medill",
    "flow1": 6,
    "flow2": 1
  },

   {
    "year": "2008-2009",
    "importer1": "SESP",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 0
  },

   {
    "year": "2008-2009",
    "importer1": "SESP",
    "importer2": "Weinberg",
    "flow1": 91,
    "flow2": 6
  },

  {
    "year": "2008-2009",
    "importer1": "McCormick",
    "importer2": "Medill",
    "flow1": 1,
    "flow2": 0
  },

  {
    "year": "2008-2009",
    "importer1": "McCormick",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 0
  },

  {
    "year": "2008-2009",
    "importer1": "McCormick",
    "importer2": "Weinberg",
    "flow1": 18,
    "flow2": 39
  },

  {
    "year": "2008-2009",
    "importer1": "Medill",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 0
  },

  {
    "year": "2008-2009",
    "importer1": "Medill",
    "importer2": "Weinberg",
    "flow1": 9,
    "flow2": 25
  },

   {
    "year": "2008-2009",
    "importer1": "Bienen",
    "importer2": "Weinberg",
    "flow1": 5,
    "flow2": 2
  },

//2007-2008

    {
    "year": "2007-2008",
    "importer1": "Communication",
    "importer2": "SESP",
    "flow1": 3,
    "flow2": 11
  },

  {
    "year": "2007-2008",
    "importer1": "Communication",
    "importer2": "McCormick",
    "flow1": 5,
    "flow2": 2
  },

   {
    "year": "2007-2008",
    "importer1": "Communication",
    "importer2": "Medill",
    "flow1": 3,
    "flow2": 1
  },

  {
    "year": "2007-2008",
    "importer1": "Communication",
    "importer2": "Bienen",
    "flow1": 1,
    "flow2": 0
  },

  {
    "year": "2007-2008",
    "importer1": "Communication",
    "importer2": "Weinberg",
    "flow1": 123,
    "flow2": 22
  },

   {
    "year": "2007-2008",
    "importer1": "SESP",
    "importer2": "McCormick",
    "flow1": 4,
    "flow2": 0
  },

   {
    "year": "2007-2008",
    "importer1": "SESP",
    "importer2": "Medill",
    "flow1": 5,
    "flow2": 1
  },

   {
    "year": "2007-2008",
    "importer1": "SESP",
    "importer2": "Bienen",
    "flow1": 1,
    "flow2": 0
  },

   {
    "year": "2007-2008",
    "importer1": "SESP",
    "importer2": "Weinberg",
    "flow1": 86,
    "flow2": 10
  },

  {
    "year": "2007-2008",
    "importer1": "McCormick",
    "importer2": "Medill",
    "flow1": 0,
    "flow2": 2
  },

  {
    "year": "2007-2008",
    "importer1": "McCormick",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 0
  },

  {
    "year": "2007-2008",
    "importer1": "McCormick",
    "importer2": "Weinberg",
    "flow1": 23,
    "flow2": 55
  },

  {
    "year": "2007-2008",
    "importer1": "Medill",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 0
  },

  {
    "year": "2007-2008",
    "importer1": "Medill",
    "importer2": "Weinberg",
    "flow1": 13,
    "flow2": 11
  },

   {
    "year": "2007-2008",
    "importer1": "Bienen",
    "importer2": "Weinberg",
    "flow1": 0,
    "flow2": 3
  },

//2006-2007

    {
    "year": "2006-2007",
    "importer1": "Communication",
    "importer2": "SESP",
    "flow1": 3,
    "flow2": 3
  },

  {
    "year": "2006-2007",
    "importer1": "Communication",
    "importer2": "McCormick",
    "flow1": 11,
    "flow2": 0
  },

   {
    "year": "2006-2007",
    "importer1": "Communication",
    "importer2": "Medill",
    "flow1": 5,
    "flow2": 1
  },

  {
    "year": "2006-2007",
    "importer1": "Communication",
    "importer2": "Bienen",
    "flow1": 3,
    "flow2": 0
  },

  {
    "year": "2006-2007",
    "importer1": "Communication",
    "importer2": "Weinberg",
    "flow1": 106,
    "flow2": 26
  },

   {
    "year": "2006-2007",
    "importer1": "SESP",
    "importer2": "McCormick",
    "flow1": 5,
    "flow2": 0
  },

   {
    "year": "2006-2007",
    "importer1": "SESP",
    "importer2": "Medill",
    "flow1": 2,
    "flow2": 0
  },

   {
    "year": "2006-2007",
    "importer1": "SESP",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 0
  },

   {
    "year": "2006-2007",
    "importer1": "SESP",
    "importer2": "Weinberg",
    "flow1": 72,
    "flow2": 7
  },

  {
    "year": "2006-2007",
    "importer1": "McCormick",
    "importer2": "Medill",
    "flow1": 0,
    "flow2": 0
  },

  {
    "year": "2006-2007",
    "importer1": "McCormick",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 0
  },

  {
    "year": "2006-2007",
    "importer1": "McCormick",
    "importer2": "Weinberg",
    "flow1": 24,
    "flow2": 55
  },

  {
    "year": "2006-2007",
    "importer1": "Medill",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 0
  },

  {
    "year": "2006-2007",
    "importer1": "Medill",
    "importer2": "Weinberg",
    "flow1": 12,
    "flow2": 8
  },

   {
    "year": "2006-2007",
    "importer1": "Bienen",
    "importer2": "Weinberg",
    "flow1": 1,
    "flow2": 5
  },

//2005-2006

  {
    "year": "2005-2006",
    "importer1": "Communication",
    "importer2": "SESP",
    "flow1": 3,
    "flow2": 3
  },

  {
    "year": "2005-2006",
    "importer1": "Communication",
    "importer2": "McCormick",
    "flow1": 1,
    "flow2": 1
  },

   {
    "year": "2005-2006",
    "importer1": "Communication",
    "importer2": "Medill",
    "flow1": 6,
    "flow2": 3
  },

  {
    "year": "2005-2006",
    "importer1": "Communication",
    "importer2": "Bienen",
    "flow1": 2,
    "flow2": 0
  },

  {
    "year": "2005-2006",
    "importer1": "Communication",
    "importer2": "Weinberg",
    "flow1": 133,
    "flow2": 14
  },

   {
    "year": "2005-2006",
    "importer1": "SESP",
    "importer2": "McCormick",
    "flow1": 5,
    "flow2": 0
  },

   {
    "year": "2005-2006",
    "importer1": "SESP",
    "importer2": "Medill",
    "flow1": 5,
    "flow2": 1
  },

   {
    "year": "2005-2006",
    "importer1": "SESP",
    "importer2": "Bienen",
    "flow1": 1,
    "flow2": 0
  },

   {
    "year": "2005-2006",
    "importer1": "SESP",
    "importer2": "Weinberg",
    "flow1": 43,
    "flow2": 10
  },

  {
    "year": "2005-2006",
    "importer1": "McCormick",
    "importer2": "Medill",
    "flow1": 0,
    "flow2": 1
  },

  {
    "year": "2005-2006",
    "importer1": "McCormick",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 0
  },

  {
    "year": "2005-2006",
    "importer1": "McCormick",
    "importer2": "Weinberg",
    "flow1": 25,
    "flow2": 38
  },

  {
    "year": "2005-2006",
    "importer1": "Medill",
    "importer2": "Bienen",
    "flow1": 0,
    "flow2": 0
  },

  {
    "year": "2005-2006",
    "importer1": "Medill",
    "importer2": "Weinberg",
    "flow1": 17,
    "flow2": 11
  },

   {
    "year": "2005-2006",
    "importer1": "Bienen",
    "importer2": "Weinberg",
    "flow1": 2,
    "flow2": 4
  }

  ];

  // IMPORT THE CSV DATA
  var data=trade;


    data.forEach(function (d) {
      d.year  =  d.year;
      //console.log(d.year);
      d.flow1 = +d.flow1;
      d.flow2 = +d.flow2;

      if (!$scope.master[d.year]) {
        $scope.master[d.year] = []; // STORED BY YEAR
      }
      $scope.master[d.year].push(d);
    })
    $scope.update();


  $scope.$watch('selected_year', $scope.update);
  $scope.$watch('filters', $scope.update, true);

}]);

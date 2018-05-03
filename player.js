angular.module("player", []).controller("audioplayer",
function($scope, $http)
{
    $scope.prefix = "https://ipfs.io/ipfs/";
    $scope.list = null;
    // Using myJSON for json storage
    $http.get('https://api.myjson.com/bins/o4px6')
            .then(function(res){
                $scope.list = Array.from(res.data);
            })

   $scope.shuffle_song = function()
   {
        var music_id = Math.floor(Math.random() * $scope.list.length );
        $scope.list_model = $scope.list[music_id];
   }

   $scope.next_song = function() {

   }

   //event listeners
});

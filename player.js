angular.module("player", []).controller("audioplayer",
function($scope, $http)
{
    $scope.prefix = "https://ipfs.io/ipfs/";
    $scope.list = null;
    $http.get('https://ipfs.io/ipfs/QmYAwWgcWaTP8xKzHjpZek6W2nWKwWv6n3prvtq8DG2hag')
            .then(function(res){
                $scope.list = Array.from(res.data);
            })

   $scope.shuf_song = function()
   {
        var music_id = Math.floor(Math.random() * $scope.list.length );
        $scope.list_model = $scope.list[music_id];
   }
});

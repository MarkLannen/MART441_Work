function printArray()
{
    var friends = "George,Grace,Ella,John,Meghan,Ben";
    var separateFriends = friends.split(",");
    var allFriends = "";
    for(var i = 0; i < separateFriends.length; i++)
    {
        allFriends += separateFriends[i] + "<br>";
    }
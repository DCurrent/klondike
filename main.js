// dc_klondike_guid 
// Caskey, Damon V. 
// 2016-06-19 

// Output a simulated guid. Note these should be used only 
// for client side IDs and other items where a unique ID 
// is needed but data integrity is not paramount.
function dc_klondike_guid()
{  
  var $result = null; 
  
  $result = dc_klondike_sector(); 
  $result += dc_klondike_sector(); 
  $result += '-'; 
  $result += dc_klondike_sector(); 
  $result += '-'; 
  $result += dc_klondike_sector(); 
  $result += '-'; 
  $result += dc_klondike_sector(); 
  $result += '-'; 
  $result += dc_klondike_sector(); 
  $result += dc_klondike_sector(); 
  $result += dc_klondike_sector();
  
  return $result;  
} 
  
function dc_klondike_sector() 
{ 
    var $result = null; 
    
    $result = Math.floor((1 + Math.random()) * 0x10000); 
    $result = $result.toString(16); 
    $result = $result.substring(1); 
    
    return $result; 
}

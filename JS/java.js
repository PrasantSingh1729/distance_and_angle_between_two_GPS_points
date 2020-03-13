function distance(lat1, lat2, lon1, lon2) 
    { 
  
        // The math module contains a function 
        // named toRadians which converts from 
        // degrees to radians. 
        var fact=3.1415926535897/180;
        lon1 = lon1*fact; 
        lon2 = lon2*fact; 
        lat1 = lat1*fact; 
        lat2 = lat2*fact; 
  
        // Haversine formula  
        var dlon = lon2 - lon1;  
        var dlat = lat2 - lat1; 
        var a = Math.pow(Math.sin(dlat / 2), 2) 
                 + Math.cos(lat1) * Math.cos(lat2) 
                 * Math.pow(Math.sin(dlon / 2),2); 
              
        var c = 2 * Math.asin(Math.sqrt(a)); 
  
        // Radius of earth in kilometers. Use 3956  
        // for miles 
        var r = 6371; 
  
        // calculate the result 
        return(c * r); 
    } 
    function angleFromCoordinate(lat1, long1, lat2, long2) {
        var ans=1;
        var dlon =(long2 - long1);
        var dlat =(lat2 - lat1);
        console.log(dlon);
        console.log(dlat);
        //var brng = Math.atan2(y, x);
        if(dlon>=0 && dlat>=0)
        {
        ans=Math.atan2(dlon, dlat)
        var fact = 180/3.1415926535897;
        ans=fact*ans;
        return 360-ans;
        }
        else if(dlon<0 && dlat>=0)
        {
        dlon=-dlon;
        ans=Math.atan2(dlon, dlat)
        var fact = 180/3.1415926535897;
        ans=fact*ans;
        return ans;   
        }
        else if(dlon<0 && dlat<0)
        {
        dlon=-dlon;
        dlat=-dlat;
        ans=Math.atan2(dlon, dlat)
        var fact = 180/3.1415926535897;
        ans=fact*ans;
        return 180-ans;   
        }
        else
        {
        dlat=-dlat;
        ans=Math.atan2(dlon, dlat)
        var fact = 180/3.1415926535897;
        ans=fact*ans;
        return 180+ans;  
        }
        
    }

function cal()
{
        navigator.geolocation.getCurrentPosition(run);
        //document.getElementById("write").innerHTML =;  //(angleFromCoordinate(lat1,lon1,lat2,lon2)).toString() Degree "
} 
//angle will form with respect to North direction from point 1.
function run(position)
{
        var lat1=Number(position.coords.latitude);
        var lon1=Number(position.coords.longitude);
        var lat2 = document.getElementById("lat2").value;
        lat2 = Number(lat2); 
        var lon2 = document.getElementById("log2").value;
        lon2 = Number(lon2);
        var a=angleFromCoordinate(lat1,lon1,lat2,lon2);
       // alert(distance(lat1, lat2, lon1, lon2) + " K.M " + angleFromCoordinate(lat1,lon1,lat2,lon2) + " Degree");
       document.getElementById("compass").style.display="block";
       var angle = angleFromCoordinate(lat1,lon1,lat2,lon2);
       var rot = "rotate("+String(360-angleFromCoordinate(lat1,lon1,lat2,lon2))+"deg)";
       document.getElementById("image").style.transform=rot;
       document.getElementById("write").innerHTML ="<br><br>"+distance(lat1, lat2, lon1, lon2)+" K.M away from each other"+"<br>"+angleFromCoordinate(lat1,lon1,lat2,lon2)+ " Degree from north from point 1 (angle anticlockwise)<br> " ; 
       
}
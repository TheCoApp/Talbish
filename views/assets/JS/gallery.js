// JavaScript Document
var headArray = new Array();
var bodyArray = new Array();
var legsArray = new Array();
var shoesArray = new Array();

headArray[0] = new Image();
headArray[0].src = 'images/head1.png';
headArray[1] = new Image();
headArray[1].src = 'images/head2.png';
headArray[2] = new Image();
headArray[2].src = 'images/head3.png';

bodyArray[0] = new Image();
bodyArray[0].src = 'images/body1.png';
bodyArray[1] = new Image();
bodyArray[1].src = 'images/body2.png';
bodyArray[2] = new Image();
bodyArray[2].src = 'images/body3.png';

legsArray[0] = new Image();
legsArray[0].src = 'images/legs1.png';
legsArray[1] = new Image();
legsArray[1].src = 'images/legs2.png';
legsArray[2] = new Image();
legsArray[2].src = 'images/legs3.png';

shoesArray[0] = new Image();
shoesArray[0].src = 'images/shoes1.png';
shoesArray[1] = new Image();
shoesArray[1].src = 'images/shoes2.png';
shoesArray[2] = new Image();
shoesArray[2].src = 'images/shoes3.png';

/*------------------------------------*/

function nextImage(element, bodypart)
{
    var img = document.getElementById(element);

    for(var i = 0; i < bodypart+'Array'.length; i++)
    {
        if(bodypart+'Array'[i].src == img.src) // << check this
        {
            if(i === bodypart+'Array'.length){
                document.getElementById(element).src = bodypart+'Array'[0].src;
                break;
            }
            document.getElementById(element).src = bodypart+'Array'[i+1].src;
            break;
        }
    }
}


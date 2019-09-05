//file java-script

function hasClassName(inElement, inClassName)
 {
     var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)');
     return regExp.test(inElement.className);
 }

 function addClassName(inElement, inClassName)
 {
     if (!hasClassName(inElement, inClassName))
         inElement.className = [inElement.className, inClassName].join(' ');
 }

 function removeClassName(inElement, inClassName)
 {
     if (hasClassName(inElement, inClassName)) {
         var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)', 'g');
         var curClasses = inElement.className;
         inElement.className = curClasses.replace(regExp, ' ');
     }
 }

 function toggleClassName(inElement, inClassName)
 {
     if (hasClassName(inElement, inClassName))
         removeClassName(inElement, inClassName);
     else
         addClassName(inElement, inClassName);
 }

 function toggleShape()
 {
   var shape = document.getElementById('shape');
   if (hasClassName(shape, 'cube') || hasClassName(shape, 'autoLoad')) {
		if (hasClassName(shape, 'cube')) {
			removeClassName(shape, 'cube');
		}
		if (hasClassName(shape, 'autoLoad')) {
			removeClassName(shape, 'autoLoad');
		}
        addClassName(shape, 'ring');
      } else {
        removeClassName(shape, 'ring');
        addClassName(shape, 'cube');
      }

   
   var stage = document.getElementById('stage');
   if (hasClassName(shape, 'ring'))
     stage.style.webkitTransform = 'translateZ(-200px)';
   else
     stage.style.webkitTransform = '';
 }

 //background
  var count = 0;
	function timedCount() {
		if(count >= 8) {
			count = 0;
			autoLoad();
		} else {
			count = count + 1;
    }
    
		setTimeout(timedCount, 1000);
	}

  function autoLoad() {
		var shapeTest = document.getElementById('shape');
		if (hasClassName(shapeTest, 'cube')) {
			removeClassName(shapeTest, 'cube');
			addClassName(shapeTest, 'autoLoad');
		} else {
			toggleShape();
		}
  }
  
  //Modal
  function displayModal()
    {
      var modal = document.getElementById('myModal');
      modal.style.display = "block";
    }

    window.onclick = function(event) {
      var modal = document.getElementById('myModal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


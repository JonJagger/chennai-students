$(document).ready(function() {

  let shuffle = function(array=this) {
    let counter = array.length;
    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  };
  Array.prototype.shuffle = shuffle;

  let makeStudentImage = function(name) {
    return $('<img>', {
      'class':'student',
      'title':name,
      'src':`img/${name}.png`
     });
  };

  let studentNames = function() {
    return [
      'Akhil',
      'Akshaya',
      'Arun',
      'ArunKumar',
      'Ashwin',
      'Deekshita',
      'Divya',
      'Francis',
      'Gayathri',
      'Heamanth',
      'Karthick',
      'Krishna',
      'Manisha',
      'Mihir',
      'Murali',
      'Madhu',
      'Neeharika',
      'Prakash',
      'Prakhyat',
      'Sanjana',
      'Sankara',
      'Sariha',
      'Shravan',
      'Sindhura',
      'Srikar',
      'Surya',
      'Tharun',
      'Uma',
      'Vamshi',
      'Veena',
      'Vignesh',
      'Vinay'
    ].shuffle();
  };

  for (let name of studentNames()) {
    $('students').append(makeStudentImage(name));
  }

  $('img.student').tooltip({
    position: {
      my: 'center bottom-20',
      at: 'center top',
      using: function(position,feedback) {
        $(this).css(position);
        $('<div>')
          .addClass('arrow')
          .addClass(feedback.vertical)
          .addClass(feedback.horizontal)
          .appendTo(this);
      } // using
    } // position
  }); // tooltip

});

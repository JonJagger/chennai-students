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
      'Francis', 'Karthick', 'Akshaya', 'Sanjana',
      'Uma', 'Neeharika', 'Manisha', 'Arun',
      'Sari', 'Sindhura', 'Deekshita', 'Sri',
      'Surya', 'Veena', 'Vinay', 'Akhil',
      'Heamanth', 'Krish', 'ArunKumar', 'Mihir',
      'Murali', 'Maddy', 'Prakhyat', 'Prakash',
      'Vamshi', 'Sankar', 'Ashwin', 'Gayathri',
      'Vignesh', 'Shravan'
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

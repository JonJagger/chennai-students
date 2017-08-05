$(document).ready(function() {

  let shuffle = function(array) {
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

  let makeStudentImage = function(name,extension) {
    return $('<img>', {
      'class':'student',
      'title':name,
      'src':`img/${name}.${extension}`
     });
  };

  let studentNamesPNG = function() {
    return [ 'Deekshita', 'Srikar', 'Surya' ];
  };
  let studentNamesJPG = function() {
    return [
      'Akhil',
      'Akshaya',
      'Arun',
      'ArunKumar',
      'Ashwin',
      'Divya',
      'Francis',
      'Gayathri',
      'Heamanth',
      'John',
      'Jon',
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
      'Tharun',
      'Uma',
      'Vamshi',
      'Veena',
      'Vignesh',
      'Vinay'
    ];
  };

  let filenames = [];
  for (let name of studentNamesJPG()) {
    filenames.push([name,'jpg']);
  }
  for (let name of studentNamesPNG()) {
    filenames.push([name,'png']);
  }
  for (let filename of shuffle(filenames)) {
    let name = filename[0];
    let extension = filename[1];
    $('students').append(makeStudentImage(name,extension));
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
      }
    }
  });

  $('#shuffle').click(function() {
    window.location.reload();
  });

});

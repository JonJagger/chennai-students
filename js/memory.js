$(document).ready(function() {

  const randomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const shuffle =function(array) {
    var clone = array.slice(0);
    for (var i = 0; i < clone.length; i++) {
      var swap = randomInt(0, i);
      var temp = clone[swap];
      clone[swap] = clone[i];
      clone[i] = temp;
    }
    return clone;
  }

  const makeStudentImage = function(name,extension) {
    return $('<img>', {
      'class':'student',
      'title':name,
      'src':`img/${name}.${extension}`
     });
  };

  const studentNamesPNG = function() {
    return [ 'Deekshita', 'Srikar', 'Surya' ];
  };

  const studentNamesJPG = function() {
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
  for (const name of studentNamesJPG()) {
    filenames.push([name,'jpg']);
  }
  for (const name of studentNamesPNG()) {
    filenames.push([name,'png']);
  }
  for (const filename of shuffle(filenames)) {
    const name = filename[0];
    const extension = filename[1];
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

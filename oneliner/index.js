import oneLinerJoke from "one-liner-joke";


var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke)

/*
One can add exclusion filter for the jokes tags
default is ['racist', 'dirty', 'sex']
*/
var getRandomJoke = oneLinerJoke.getRandomJoke({
    'exclude_tags': ['dirty', 'racist', 'marriage']
  });
console.log(getRandomJoke)


/*


var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag('stupid');
console.log(getRandomJokeWithTag)

/*
One can add exclusion filter for the jokes tags
default is ['racist', 'dirty', 'sex']
*/
var getRandomJoke = oneLinerJoke.getRandomJokeWithTag('stupid', {
  'exclude_tags': ['dirty', 'racist', 'marriage']
});
console.log(getRandomJoke)

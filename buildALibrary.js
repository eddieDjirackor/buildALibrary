//Parent Class
class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  toggleCheckOutStatus() {
    if(this.isCheckedOut){
      this.isCheckedOut = false;
    } else {
      this.isCheckedOut = true;
    }
  }

    getAverageRating() {
      let arraySum = this.ratings.reduce((prevValue, curValue) => prevValue + curValue );

      return arraySum/this.ratings.length;
    }  

    addRating(rating) {
      this.ratings.push(rating);
    }

  set isCheckedOut(value) {
    if(value) {
      this._isCheckedOut = value;
    }
  }

}

// Child Class
class Book extends Media{
  constructor(title, pages, author) {
  super(title);
  this._author = author;
  this._pages = pages;
}

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

//Child Class
class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

// Instance of the Book Class
const historyOfEverything = new Book('A Short History of Nearly Everything', 544, 'Bill Bryson');

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);

historyOfEverything.addRating(5);

historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

// Instance of the Movie Class
const speed = new Movie('Speed', 'Jan de Bont', 116);

speed.toggleCheckOutStatus();

console.log(speed.isCheckedOut);

speed.addRating(1);

speed.addRating(1);

speed.addRating(5);

console.log(speed.getAverageRating());


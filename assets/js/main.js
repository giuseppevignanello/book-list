const { createApp } = Vue

createApp({
    data() {

        return {
            books: [],
            newBook: "",
            newAuthor: "",
            newPublisher: "",
            error: "",
            completed: [],
        }
    },
  
    methods: {
        read(i) {
            this.completed.push(this.books[i])
            this.books.splice(i, 1),
            localStorage.setItem('completed', JSON.stringify(this.completed));
            localStorage.setItem('books', JSON.stringify(this.books));
        },
        remove(i) {
            this.books.splice(i, 1)
        },
        addBook() {
            if (this.newBook.length >= 2 && this.newAuthor.length >= 2 && this.newPublisher.length >= 2) {
                this.books.unshift(
                    {
                        title: this.newBook,
                        author: this.newAuthor,
                        publisher: this.newPublisher,
                        done: false,
                    }
                );
                this.newBook = "",
                    this.newAuthor = "",
                    this.newPublisher = ""
            } else {
                this.error = "The length of each field must contain at least two characters "
            }
            localStorage.setItem('books', JSON.stringify(this.books));
        },
        changeStatus(i) {
            this.books[i].done = !this.books[i].done
        },
        


    },
    created() {
        const savedBooks = localStorage.getItem('books');
        if (savedBooks) {
          this.books = JSON.parse(savedBooks);
        };
        const savedCompleted = localStorage.getItem('completed');
        if (savedCompleted) {
          this.completed = JSON.parse(savedCompleted);
        }
    },
    
   
}).mount('#app')


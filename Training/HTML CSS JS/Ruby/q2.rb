class Book
  def initialize(bookName, author, price)
    @book_name =bookName
    @author =author
    @price =price
  end

  def get_details
    puts "Book Name is :" + @book_name
    puts "Author Name is :" + @author
    puts "Price is :" + @price
  end
end

new_book = Book.new("XYZ", "Sachin", 1000)
new_book.get_details()
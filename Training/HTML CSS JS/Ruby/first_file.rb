class Book
  def initialize(bookName, author, price)
    @book_name =bookName
    @author =author
    @price =price
  end

  def get_details
    puts "Book Name is :" + @book_name
    puts "Author Name is :" + @author
    puts "Price is :" + @price.to_s
  end
end

new_book = Book.new("XYZ", "Sachin", 1000)
new_book.get_details

#c) Score = 100(if else)
#           Check the score is greater than 50 – then half century
#           Check the score is greater than 100 – then century using comparison operators
#
#
# b)word = "Determination"
#
# check how many characters word have?
#
# word is having "tion"?
# word is having "tic
# clear the word..check is that empty?
#  5)Use IRB to work out few numeric methods
# age=27
#
#
# 1. My age : 27
# 2. Next year my age would be 28.
# 3. Verify the age is in between 20 to 30
# 4. Verify the age is exactly 27 or not
#            5. Print 5 times age with the help of "times" methods
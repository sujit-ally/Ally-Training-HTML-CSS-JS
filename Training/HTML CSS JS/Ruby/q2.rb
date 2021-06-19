# HomeWork for weekend
#
#
the_count = [1, 2, 3, 4, 5]
fruits = ['apples', 'oranges', 'pears', 'apricots']
change = [1, 'pennies', 2, 'dimes', 3, 'quarters']

the_count.each { |val| puts `This is count ${val}`}
fruits.each { |val| puts `A type of fruit: ${val}`}
change.each { |val| puts `I got ${val}`}

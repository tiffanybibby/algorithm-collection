def longest_word(str)
  array = str.split(" ")
  array.max_by { |string| string.length } 
end

puts longest_word("The quick brown fox jumped over the lazy dog")
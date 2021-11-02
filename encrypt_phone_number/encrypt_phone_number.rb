def encrypt_phone_number(str)
   str[0...7].gsub(/\d/, "*") + str[7...13]
end

puts encrypt_phone_number '718-867-5309'
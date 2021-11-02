def factorialize(int)
  num = 1
  while int > 0
    num = num * int
    int -= 1
  end
  num
end
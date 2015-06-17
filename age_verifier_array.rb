def age_verifier (age_array)
  age_array.each do |age|
    if age < 21
      puts "age #{age}: not allowed"
    end
  end
end

age_verifier([18, 23, 14, 55, 104])

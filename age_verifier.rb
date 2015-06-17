def age_verifier (age)
  if age < 21
    puts "too young"
  else
    puts "proceed"
  end
end

puts "I am 18. May I come in?"
age_verifier(18)

puts "Haha! :-p  I am 25. May I come in?"
age_verifier(25)


# run it from command line
# ruby -r "./age_verifier" -e "age_verifier(12)"

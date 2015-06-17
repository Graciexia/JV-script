def pigatize(text)
  if starts_with_vowel?(text)
    text = text + "way"
  else
    consonant = text[0]
    text[1..-1] + consonant + "ay"
  end
end
 
def starts_with_vowel?(text)
  arr_vowel = ["a","e","i","o","u"]
  arr_vowel.include?(text[0])
end
 
loop do
	puts "Please enter a word and I will translate to pig latin"
	text = gets.chomp.downcase
	break if text.length == 0 # Break out of the loop if I say nothing
	puts pigatize(text)
end

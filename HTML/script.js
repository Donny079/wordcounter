// script.js
document.getElementById("textInput").addEventListener("input", function () {
    const text = this.value;
  
    // Word count: split by spaces, filter out empty strings
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    document.getElementById("wordCount").textContent = words.length;
  
    // Sentence count: split by punctuation marks (., ?, !) and filter out empty strings
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    document.getElementById("sentenceCount").textContent = sentences.length;
  });
  
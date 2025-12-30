document.addEventListener('DOMContentLoaded', function() {
  const subtitleElement = document.getElementById('typing-subtitle');
  const subtitleText = 'I work across the full data and AI stack covering data analytics, machine learning, deep learning, and Generative AI to build end-to-end systems that translate raw data into scalable intelligence.';

  let subtitleCharIndex = 0;
  function typeSubtitle() {
    if (subtitleCharIndex < subtitleText.length) {
      subtitleElement.textContent += subtitleText.charAt(subtitleCharIndex);
      subtitleCharIndex++;
      setTimeout(typeSubtitle, 30);
    }
  }

  typeSubtitle();
});

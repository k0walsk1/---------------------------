document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach(item => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
      const toggle = item.querySelector(".faq-toggle");
  
      question.addEventListener("click", () => {
        const isOpen = answer.classList.contains("open");
  
        // Закрыть все другие открытые вопросы
        document.querySelectorAll(".faq-answer.open").forEach(openAnswer => {
          openAnswer.classList.remove("open");
          openAnswer.previousElementSibling.querySelector(".faq-toggle").textContent = "+";
        });
  
        if (!isOpen) {
          answer.classList.add("open");
          toggle.textContent = "-";
        } else {
          answer.classList.remove("open");
          toggle.textContent = "+";
        }
      });
    });
  });
  
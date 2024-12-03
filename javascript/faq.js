const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      const icon = question.querySelector('.icon');

      question.addEventListener('click', () => {
        // Fecha outros itens ao abrir um novo
        faqItems.forEach(i => {
          if (i !== item) {
            i.querySelector('.faq-answer').classList.remove('open');
            i.querySelector('.icon').classList.remove('rotate');
          }
        });

        // Alterna o estado do item clicado
        answer.classList.toggle('open');
        icon.classList.toggle('rotate');
      });
    });
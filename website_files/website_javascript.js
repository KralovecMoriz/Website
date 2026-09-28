document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');

    const style = document.createElement('style');
    style.textContent = `
        #game-status {
            margin-top: 20px;
            padding: 12px 16px;
            display: inline-block;
            background: #1f6feb;
            color: white;
            border-radius: 10px;
            font-weight: bold;
            box-shadow: 0 4px 12px rgba(31, 111, 235, 0.3);
            transition: all 0.2s ease;
        }

        .pressed {
            transform: scale(0.96);
            background: #27ae60 !important;
            color: white !important;
        }
    `;
    document.head.appendChild(style);

    const statusBox = document.createElement('div');
    statusBox.id = 'game-status';
    statusBox.textContent = 'Bereit zum Spielen';
    document.body.appendChild(statusBox);

    buttons.forEach((button) => {
        const gameTitle = button.closest('div')?.querySelector('h3')?.textContent || 'Spiel';

        button.addEventListener('click', () => {
            statusBox.textContent = `▶ ${gameTitle} startet...`;
            button.classList.add('pressed');
            button.disabled = true;

            setTimeout(() => {
                statusBox.textContent = `✅ ${gameTitle} läuft!`;
                button.classList.remove('pressed');
                button.textContent = 'Wieder spielen';
                button.disabled = false;
            }, 800);
        });
    });
});

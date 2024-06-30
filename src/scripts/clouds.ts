class Cloud {
    size: number;
    opacity: number;
    height: number;
    speed: number;
    delay: number;

    constructor(size: number, opacity: number, height: number, speed: number, delay: number) {
        this.size = size;
        this.opacity = opacity;
        this.height = height;
        this.speed = speed;
        this.delay = delay;
    }

    createDiv(): HTMLDivElement {
        const wrapperDiv = document.createElement('div');
        wrapperDiv.className = "wrapper";
        wrapperDiv.style.transform = `scale(${this.size / 100})`;
        wrapperDiv.style.top = `${this.height}px`;

        const cloudDiv = document.createElement('div');
        cloudDiv.className = 'cloud';
        cloudDiv.style.opacity = `${this.opacity}`;
        cloudDiv.style.animation = `moveCloud ${this.speed}s linear ${this.delay}s infinite`;

        wrapperDiv.appendChild(cloudDiv);

        return wrapperDiv;
    }
}

function createClouds() {
    const cloudContainer = document.querySelector(".sky");
    if (cloudContainer) {
        const containerHeight = cloudContainer.clientHeight;
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < 10; i++) { // Create 10 clouds
            const size = Math.random() * 100;
            const height = Math.floor(Math.random() * containerHeight) + 1;
            const speed = 20 + Math.random() * 40;
            const opacity = Math.random();
            const delay = i < 5 ? 0 : 5; // Add a 5-second delay to half of the clouds

            const myCloud = new Cloud(size, opacity, height, speed, delay);
            fragment.appendChild(myCloud.createDiv());
        }

        cloudContainer.appendChild(fragment);
    }
}

// createClouds();
// setTimeout(createClouds, 5000);

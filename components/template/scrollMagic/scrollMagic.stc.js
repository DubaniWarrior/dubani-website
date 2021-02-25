import Styled from 'styled-components';

const ScrollStc=Styled.div`
    
    section {
    height: 100vh;
    position: sticky;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .one {
    background: #0c0d0d;
    }

    .two {
    background: #9ade6e;
    }

    .three {
    background: #fa7968;
    }

    .four {
    background: #2cbde4;
    }

    .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 95vh;
    padding: 3rem calc((100vw - 1300px) / 2);
    }

    .column-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #000;
    padding: 0rem 2rem;
    }

    .column-left h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-style: italic;
    }

    .column-left p {
    margin-bottom: 2rem;
    font-size: 4rem;
    line-height: 1.1;
    }

    button {
    padding: 1rem 3rem;
    font-size: 1rem;
    border: none;
    background: #f5cd03;
    color: #0c0d0d;
    cursor: pointer;
    border-radius: 50px;
    }

    .column-right {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 2rem;
    }

    .image {
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 700px;
    }

    .text {
    color: #fff;
    }

    @media screen and (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
    }
    }
`;
export default ScrollStc;
import styled from 'styled-components';

const MallStyled = styled.div`
    /* 카테고리 섹션 */
    .categorySection {
        display: flex;
        justify-content: space-between;
        padding: 50px 5%;
        width: 95%;
        margin: 0 auto; /* 가운데 정렬 */
        margin-top: 100px;
    }

    /* 카테고리 카드 */
    .categoryCard {
        position: relative;
        width: 30%;
        height: 300px;
        text-align: center;
        cursor: pointer;
        background-color: #f2f2f2;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
        margin: 0 10px; /* 카드 사이 간격을 균등하게 설정 */
    }

    .categoryCard:first-child {
        margin-left: 0; /* 첫 번째 카드의 왼쪽 마진 제거 */
    }

    .categoryCard:last-child {
        margin-right: 0; /* 마지막 카드의 오른쪽 마진 제거 */
    }

    .categoryCard:hover .categoryImage {
        transform: scale(1.1) translateY(-10px);
    }

    .categoryImage {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .categoryText {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 30px;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    /* 출석 체크 섹션 */
    .attendanceSection {
        width: 100%;
        height: 100px;
        margin-top: 20px;
        padding: 20px;
        text-align: center;
        background-color: #555555;
        color: #fff;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    /* 추천 상품 섹션 */
    .recommendedSection {
        width: 90%;
        padding: 40px 0;
        text-align: center;
        background-color: #fff;
        margin: 0 auto;
    }

    /* 추천 상품 제목 */
    .recommendedTitle {
        font-size: 32px;
        font-weight: bold;
        margin-top: 100px;
        margin-bottom: 50px;
    }

    /* 상품 컨테이너 */
    .productContainer {
        display: flex;
        justify-content: space-between;
        width: 95%; /* 전체 너비의 95%로 설정 */
        margin: 0 auto; /* 가운데 정렬 */
        gap: 20px; /* 카드 사이의 간격 */
    }

    /* 상품 카드 */
    .productCard {
        width: 50%; /* 50%로 설정하여 두 개의 카드가 나란히 배치 */
        text-align: center;
        /* border: 1px solid #ddd; */
        border-radius: 10px;
        padding: 15px;
        background-color: #fff;
        cursor: pointer;
    }

    /* 상품 이미지 */
    .productImage {
        width: 100%;
        height: auto;
        object-fit: cover;
        margin-bottom: 10px;
    }

    /* 상품명 */
    .productName {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 5px;
        margin-left: 5px;
        display: flex;
        justify-content: flex-start;
    }

    /* 상품 가격 */
    .productPrice {
        font-size: 18px;
        color: #333;
        display: flex;
        margin-left: 5px;
        justify-content: flex-start;
    }

    /* 더보기 버튼 */
    .viewMoreButton {
        width: 250px;
        height: 50px;
        margin-top: 50px;
        padding: 10px 20px;
        font-size: 16px;
        background-color: #000000;
        color: #fff;
        border: none;
        border-radius: 50px;
        cursor: pointer;

        &:hover {
            background-color: #888 !important;
            color: white !important;
        }
    }

    .viewMoreButton:hover {
        background-color: #333;
    }

   

    /* 태블릿 (1024px 이하) */
    @media screen and (max-width: 1024px) {
        .categoryCard {
            height: 300px;
        }

        .categoryText {
            font-size: 24px;
        }

        .attendanceSection {
            font-size: 20px;
            height: 70px;
        }

        .recommendedTitle {
            font-size: 24px;
        }
    }

    /* 작은 태블릿 (768px 이하) */
    @media screen and (max-width: 768px) {
        .categorySection {
            flex-direction: column;
            align-items: center;
            gap: 20px;
            padding: 30px 20px;
        }

        .categoryCard {
            width: 90%;
            height: 250px;
        }

        .categoryText {
            font-size: 22px;
        }

        .productContainer {
            flex-wrap: wrap;
        }

        .productCard {
            width: calc(50% - 20px);
            min-width: 150px;
        }

        .attendanceSection {
            height: 60px;
            font-size: 18px;
        }
    }

    /* 모바일 (480px 이하) */
    @media screen and (max-width: 480px) {
        .categorySection {
            padding: 20px 10px;
        }

        .categoryCard {
            width: 100%;
            height: 200px;
        }

        .categoryText {
            font-size: 20px;
        }

        .attendanceSection {
            height: 50px;
            font-size: 16px;
            padding: 10px;
        }

        .recommendedSection {
            padding: 20px 10px;
        }

        .recommendedTitle {
            font-size: 20px;
        }

        .productContainer {
            flex-direction: column;
            align-items: center;
        }

        .productCard {
            width: 90%;
        }

        .viewMoreButton {
            width: 90%;
            margin: 20px auto 0;
            padding: 12px;
        }

        .scrollTopButton {
            bottom: 15px;
            right: 15px;
            padding: 8px;
        }
    }
`;

export default MallStyled;
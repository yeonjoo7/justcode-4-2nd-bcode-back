const reviewService = require('../services/reviewService');

const getReviews = async (req, res) => {
    try {
        const { productId, limit } = req.query;

        if (!productId || !limit) {
            return res
                .status(400)
                .json({ message: 'MISSING_PRODUCTID_OR_LIMIT' });
        }

        const reviews = await reviewService.getReviews(productId, limit);

        return res.status(200).json({ message: 'SUCCESS', reviews: reviews });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const makeReview = async (req, res) => {
    try {
        const { productId, rating, content } = req.body;
        const images = req.files;

        if (!productId || !rating || !content) {
            return res
                .status(400)
                .json({ message: 'MISSING_PRODUCTID_OR_RATING_OR_CONTENT' });
        }

        let reviews = null;
        if (images.length !== 0) {
            reviews = await Promise.all(
                images.map(
                    async image =>
                        await reviewService.makeReview(
                            productId,
                            userId,
                            rating,
                            content,
                            image.filename
                        )
                )
            );
            reviews = reviews[0];
        } else {
            reviews = await reviewService.makeReview(
                productId,
                userId,
                rating,
                content,
                null
            );
        }

        return res.status(200).json({ message: 'SUCCESS', reviews: reviews });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const updateReview = async (req, res) => {
    try {
        const { reviewId } = req.params;
        const { rating, content } = req.body;
        const images = req.files;

        if (!reviewId || !rating || !content) {
            return res
                .status(400)
                .json({ message: 'MISSING_PRODUCTID_OR_RATING_OR_CONTENT' });
        }

        let reviews = null;
        if (images.length !== 0) {
            reviews = await Promise.all(
                images.map(
                    async image =>
                        await reviewService.updateReview(
                            reviewId,
                            rating,
                            content,
                            image.filename
                        )
                )
            );
            reviews = reviews[0];
        } else {
            reviews = await reviewService.updateReview(
                reviewId,
                rating,
                content,
                null
            );
        }

        return res.status(200).json({ message: 'SUCCESS', reviews: reviews });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const deleteReview = async (req, res) => {
    try {
        const { reviewId } = req.params;

        if (!reviewId) {
            return res.status(400).json({ message: 'MISSING_REVIEWID' });
        }

        await reviewService.deleteReview(reviewId);

        return res.status(200).json({ message: 'SUCCESS' });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json({ message: error.message });
    }
};

module.exports = {
    getReviews,
    makeReview,
    updateReview,
    deleteReview,
};

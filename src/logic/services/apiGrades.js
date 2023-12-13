export async function fetchGrades(user) {
    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/grades/user-grades`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: user?._id,
            }),
        }
    );

    const json = await res.json();

    if (!res.ok) {
        console.log(json.error);
        return null;
    }

    return json;
}

export async function fetchSpecificGrade(user, level, type, set) {
    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/grades/grade-by-set`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: user._id,
                questionSetId: `${level[1]}${type}${set}`,
            }),
        }
    );

    const json = await res.json();

    if (!res.ok) {
        return null;
    }

    return json;
}

export async function addScore(
    user,
    questions,
    questionIds,
    userAnswers,
    correctAnswers
) {
    const { level, type, set } = questions[0];
    // We need to sort the questionsId together with userAnswers so that it will be in synchronized
    // We need to Combine the arrays into a 2D array so that the answer and questions are the same index
    const combinedArray = questionIds.map((questionId, index) => [
        questionId,
        userAnswers[index],
    ]);

    // Sort the 2D array based on the first column (questionIds)
    // we need to sort the userAnswers together with questions because the API returns a sorted questions which is by questionId
    const sortedArray = combinedArray.sort((a, b) => a[0].localeCompare(b[0]));

    // Get back the userAnswers which are now sorted where every questions option, the userAnswers are one of them
    const sortedUserAnswers = sortedArray.map(
        ([questionId, userAnswer]) => userAnswer
    );

    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/grades/add-grades`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: user._id,
                questionSetId: `${level}${type}${set}`,
                idPerQuestion: questionIds,
                userAnswers: sortedUserAnswers,
                score: correctAnswers.length,
            }),
        }
    );

    const json = await res.json();

    if (!res.ok) {
        console.log(json.error);
        return 0; // it means false
    }

    if (res.ok) {
        console.log("Score added");
        return 1; // it means true
    }
}

export async function fetchTotalScoresAndItems(userId) {
    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/grades/scores-total`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId,
            }),
        }
    );

    const json = await res.json();

    if (!res.ok) console.log(json.error);

    if (res.ok) return json;
}

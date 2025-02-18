const AnswersSection = () => {
    return (
        <div>
            <h2 className="text-xl font-bold">Correct Answers</h2>
            <div className="flex w-full gap-2 flex-wrap mt-2">
                <div className="bg-orange-100 p-3 flex-grow rounded-lg">
                    <p className="font-semibold">Question 1</p>
                    <p className="text-sm">answer</p>
                </div>
                <div className="bg-orange-100 p-3 flex-grow rounded-lg">
                    <p className="font-semibold">Question 2</p>
                    <p className="text-sm">answer</p>
                </div>
                <div className="bg-orange-100 p-3 flex-grow rounded-lg">
                    <p className="font-semibold">Question 3</p>
                    <p className="text-sm">answer</p>
                </div>
            </div>
        </div>
    );
};

export default AnswersSection;

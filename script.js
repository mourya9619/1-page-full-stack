document.addEventListener('DOMContentLoaded', () => {
    const assessments = [
        { title: 'Math Quiz', type: 'quiz', date: '2024-08-20', popularity: 80, completion: 95 },
        { title: 'History Assignment', type: 'assignment', date: '2024-08-15', popularity: 65, completion: 85 },
        { title: 'Student Survey', type: 'survey', date: '2024-08-22', popularity: 50, completion: 90 },
    ];

    const activities = [
        'John Doe submitted Math Quiz',
        'Jane Doe received feedback on History Assignment',
        'Class Survey completed by 30 students',
    ];

    const assessmentList = document.getElementById('assessment-list');
    const recentActivities = document.getElementById('recent-activities');
    const analyticsSummary = document.getElementById('analytics-summary');

    function renderAssessments() {
        assessmentList.innerHTML = '';
        assessments.forEach((assessment) => {
            const li = document.createElement('li');
            li.textContent = `${assessment.title} - ${assessment.type}`;
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            li.appendChild(editButton);
            assessmentList.appendChild(li);
        });
    }

    function renderActivities() {
        recentActivities.innerHTML = '';
        activities.forEach((activity) => {
            const li = document.createElement('li');
            li.textContent = activity;
            recentActivities.appendChild(li);
        });
    }

    function renderAnalyticsSummary() {
        analyticsSummary.innerHTML = '';
        assessments.forEach((assessment) => {
            const div = document.createElement('div');
            div.textContent = `${assessment.title}: Avg Score - ${assessment.completion}%`;
            analyticsSummary.appendChild(div);
        });
    }

    document.getElementById('create-assessment').addEventListener('click', () => {
        alert('Redirect to Assessment Creation Page');
    });

    renderAssessments();
    renderActivities();
    renderAnalyticsSummary();
});

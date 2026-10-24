QUOTR — PROJECT CONTEXT & SCRIPTURE DATASET GENERATION BRIEF
1. PROJECT OVERVIEW
I'm building a web application called Quotr.

Quotr helps people discover relevant Bible Scriptures based on their feelings, emotions, life situations, interests, and topics they want to explore.
The problem Quotr solves
Sometimes, people want to read the Bible but don't know which Scripture to read. They might be anxious, discouraged, grieving, struggling with relationships, making important decisions, or simply interested in learning about a particular biblical topic.

Quotr simplifies this experience by allowing users to select a category that reflects what they're feeling, experiencing, or interested in.

The application then recommends relevant Bible passages for them to look up and read.

The core idea:
Tell Quotr what's on your mind, and discover Scriptures worth reading.

Quotr is not intended to replace the Bible, a Bible application, or personal Bible study. It serves as a Scripture discovery tool that helps users find relevant passages more easily.
2. CURRENT TECHNOLOGY STACK
The application is currently built with:
- React
- JavaScript (JSX)
- Tailwind CSS
- Vite
- React Router, using the react-router package
- Local JSON data for Scripture recommendations
The current approach does not require a backend, database, or external API.

I want to keep the application relatively simple for now.

Important: The task is to generate the Scripture dataset, not rebuild the application or introduce an entirely different architecture.
3. HOW QUOTR WORKS
The user experience is intentionally simple.
Step 1: Category selection
The homepage contains categories organized into four main groups:
1. Emotional/Mental States
2. Life Situations
3. Topics/Teachings
4. Celebrations/Milestones
Users select a category card representing what they are experiencing or want to explore.

Examples might include:
- Anxious
- Discouraged
- Grieving
- Marriage
- Relationships
- Faith and Doubt
- Forgiveness
- Gratitude
These are examples, not necessarily the complete category list.
Step 2: Scripture recommendations
When users select a category, they navigate to a recommendations page containing a long, scrollable list of relevant Bible references.

For example, selecting Anxious might produce a list containing:
- Philippians 4:6–7
- Matthew 6:25–34
- 1 Peter 5:7
- Psalm 55:22
- Isaiah 41:10
The actual dataset should contain substantially more recommendations than this illustrative list.

Each recommendation should be a Bible reference, such as Luke 1:37 or Galatians 6:9.
Step 3: Users read the Scriptures themselves
I recently simplified the application concept.

Quotr will only recommend Bible references.

It will not display the complete Scripture text or require a separate page for every individual passage.

Users can look up the recommended references in their physical Bibles or preferred Bible applications.

Therefore, the dataset should focus on accurate, relevant Bible references rather than storing complete Bible quotations.
4. THE TASK: GENERATE A COMPREHENSIVE scriptures.json FILE
I do not currently have a Scripture JSON dataset.

I do not want to spend hours manually searching the internet, researching Bible passages, and collecting references for every category.

Instead, I want AI to generate a comprehensive, carefully curated dataset that I can use directly in Quotr.

The objective is to produce a high-quality collection of Scripture references organized by category, with particular attention to biblical relevance and accuracy.
What the dataset must accomplish
For every category, I want the AI to identify Bible passages that genuinely relate to that category.

For example:

Anxious

References should address concerns such as anxiety, worry, fear, trusting God, prayer, peace, and finding strength during uncertainty.

Marriage and Relationships

References should address themes such as love, commitment, mutual respect, faithfulness, communication, forgiveness, reconciliation, and biblical teachings about marriage and relationships.

Grief

References should address mourning, comfort, God's presence during suffering, hope, and finding strength during difficult times.

These are examples of the depth of consideration I expect across the dataset.

I want the AI to exercise biblical judgment rather than simply matching category names to verses containing similar keywords.
5. REQUIREMENTS FOR SCRIPTURE SELECTION
This is the most important part of the task.
A. Biblical relevance
Every reference must have a clear, defensible connection to its assigned category.

Do not include a passage merely because it contains a word that resembles the category.

Consider the passage's actual meaning, surrounding context, intended audience, and biblical message.
B. Accuracy
Every reference must identify a valid Bible passage.

Verify that:
- The book exists in the selected biblical canon.
- The chapter exists.
- The verse or verse range exists.
- The reference follows a consistent naming convention.
For example, Hebrews 5 contains 14 verses, so Hebrews 5:1–30 is invalid.

Do not invent references or verse ranges.

Where possible, verify references against a reliable Bible source or structured Bible dataset.

If a reference cannot be verified confidently, exclude it rather than presenting it as verified.
C. Thoughtful verse selection
Prefer complete verses or meaningful verse ranges when they communicate the intended message clearly.

For example, a passage may be more useful when read as Philippians 4:6–7 rather than selecting an isolated verse that omits important context.

However, do not make every reference unnecessarily long.

Use judgment to determine the most useful passage length.
D. Context-sensitive recommendations
Some Bible passages may be relevant to multiple categories.

That is acceptable when the passage genuinely serves both categories.

However, avoid indiscriminately duplicating the same references across numerous categories merely to increase the dataset's size.

Each category should have its own thoughtfully selected recommendations.
E. Appropriate biblical interpretation
Do not misrepresent Scripture or force a passage to support an interpretation it does not reasonably support.

For sensitive situations involving grief, anxiety, relationships, abuse, or other personal difficulties, recommendations should be compassionate and contextually appropriate.

For example, passages about forgiveness should not be presented as requiring someone to remain in an unsafe relationship.
F. Coverage and depth
I want a substantial collection of recommendations for each category.

Target at least 20 distinct, relevant Bible references per category, with more for broad categories where sufficient high-quality passages exist.

Twenty is a minimum target, not permission to pad categories with weak recommendations.

Quality and relevance take priority over quantity.

If a narrow category cannot reasonably support 20 strong recommendations, explain the limitation rather than inventing relevance.
6. REQUIRED JSON STRUCTURE
The dataset should be straightforward to consume in React.

Use a structure similar to this:

[
  {
    "id": "anxious",
    "name": "Anxious",
    "scriptures": [
      "Philippians 4:6-7",
      "Matthew 6:25-34",
      "1 Peter 5:7",
      "Psalm 55:22",
      "Isaiah 41:10"
    ]
  },
  {
    "id": "discouraged",
    "name": "Discouraged",
    "scriptures": [
      "Galatians 6:9",
      "Isaiah 40:31",
      "Deuteronomy 31:8",
      "Psalm 34:17-18",
      "Romans 15:13"
    ]
  }
]

This is only an example of the required format. The sample references are not a completed or verified dataset.

The final file should follow these rules:
- The root value must be a JSON array.
- Every category must have a unique, stable id.
- Every category must have a human-readable name.
- Every category must contain a scriptures array.
- Scripture references must be strings.
- Use consistent reference formatting.
- Do not include full Bible quotations.
- Do not add unrelated properties unless they provide a compelling practical benefit.
Use IDs suitable for URLs, such as faith-and-doubt, marriage, and feeling-lonely.

IDs should remain stable even if a category's display name changes.

The final output must be valid JSON that can be imported directly into a React application.

Do not include JavaScript comments, trailing commas, Markdown formatting, or explanatory prose inside the JSON file.
7. CATEGORY COVERAGE
The application has four existing category groups:
Group 1: Emotional/Mental States
This group concerns feelings and emotional experiences.

Potential categories include:
- Anxious
- Afraid
- Discouraged
- Sad
- Grieving
- Lonely
- Angry
- Confused
- Overwhelmed
- Stressed
- Guilty
- Ashamed
- Doubting
- Hopeless
- Joyful
- Peaceful
- Grateful
- Loved
- Rejected
- Uncertain
These are examples to guide the work, not a confirmed list of all existing categories.
Group 2: Life Situations
This group concerns circumstances people encounter in life.

Potential categories include:
- Marriage
- Relationships
- Singleness
- Breakups
- Family problems
- Financial difficulties
- Unemployment
- Difficult decisions
- Waiting for something important
- Illness
- Loss of a loved one
- Academic challenges
- Career uncertainty
- Conflict
- Forgiving someone
- Starting over
- Major life transitions
Group 3: Topics/Teachings
This group concerns biblical themes and subjects people want to study.

Potential categories include:
- Faith
- Doubt
- Love
- Forgiveness
- Prayer
- Wisdom
- Patience
- Obedience
- Salvation
- Grace
- Repentance
- Humility
- Trusting God
- Spiritual growth
- Temptation
- God's promises
- The Holy Spirit
- Eternal life
Group 4: Celebrations/Milestones
This group concerns significant events and positive occasions.

Potential categories include:
- Birthday
- Wedding
- Graduation
- New job
- Promotion
- New beginnings
- Achievement
- Thanksgiving
- Anniversary
- Dedication
- Baptism
- Personal victory
Important: These lists are suggestions, not an authoritative representation of my current codebase.

Before generating the final dataset, I want to ensure the categories correspond to the categories actually used in Quotr.

If the exact category list is unavailable, generate a sensible initial list, clearly identify it as a proposed list, and organize the JSON so categories can be added or removed easily.

Do not claim that these proposed categories match my codebase unless you have actually verified that.
8. QUALITY CONTROL
Before delivering the dataset, perform a quality review.

Check the following:
1. JSON validity: The file parses successfully.
2. Unique IDs: No two categories share the same ID.
3. Valid references: Books, chapters, verses, and ranges are valid.
4. Minimum coverage: Each category meets the target where appropriate.
5. Relevance: Every passage meaningfully relates to its category.
6. Duplicates: Remove duplicate references within a category.
7. Formatting: Use consistent Bible book names and reference notation.
8. Context: Avoid passages whose apparent relevance depends on ignoring their meaning.
9. Category consistency: Keep emotional states, life situations, topics, and celebrations organized appropriately.
10. Maintainability: Make the file easy to extend as Quotr grows.
If automated verification is available, use it.

Distinguish between references that were independently verified and those that were selected based on the model's biblical knowledge but could not be independently checked.

Do not falsely claim that every reference has been externally verified if no verification process was performed.
9. HOW I WANT YOU TO APPROACH THIS TASK
I want you to act as a careful Scripture researcher and structured-data generator.

Do not immediately produce a tiny example and stop.

I need a complete, usable dataset rather than a handful of sample passages.

However, I would prefer a thoughtful process over a massive, poorly curated output.

Please proceed as follows:

Phase 1: Category planning

Organize the categories into the four groups used by Quotr.

Identify any ambiguous, overlapping, or redundant categories.

Present the proposed category list before generating the complete dataset if the actual application categories have not been supplied.

Phase 2: Scripture research and selection

Identify relevant passages for each category.

Prioritize contextual accuracy, biblical relevance, useful passage ranges, and breadth of coverage.

Phase 3: Dataset generation

Generate the complete scriptures.json file using the specified structure.

If the dataset is too large for one response, split it into manageable sections without omitting categories or silently reducing the required coverage.

Ideally, produce a downloadable JSON file rather than requiring me to manually assemble hundreds of lines from chat messages.

Phase 4: Validation

Check the final file for syntax errors, duplicate IDs, duplicate references within categories, invalid references, and inadequate coverage.

Report any remaining limitations honestly.
10. IMPORTANT PROJECT CONSTRAINTS
Keep the following in mind throughout the task:
- Quotr is a React application, not a new project to be designed from scratch.
- Scripture recommendations are stored locally in JSON.
- The application currently does not require a backend or external API.
- Each category maps to its own collection of Scripture references.
- The application displays a long, scrollable list of references.
- Users read the passages using their own Bibles or Bible applications.
- The JSON does not need complete Scripture quotations.
- Each category needs a stable ID that can correspond to the application's routing.
- The data should be simple to maintain and expand.
Do not introduce unnecessary application features, authentication, databases, AI APIs, or other architectural changes as part of this task.

The goal is to create the Scripture dataset.
FINAL INSTRUCTION
Using this brief, help me create a comprehensive, carefully curated scriptures.json dataset for Quotr.

Start by identifying the proposed category list and organizing it into the four groups.

Then develop the Scripture recommendations with particular attention to biblical relevance, reference accuracy, and meaningful coverage.

The finished result should be practical enough to integrate directly into my existing React application.

I would rather have a smaller collection of genuinely relevant and accurately referenced Scriptures than hundreds of passages selected merely to fill space.

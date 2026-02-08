# How to Add Your Church Images

## Step 1: Add Pastor Photo
1. Get your pastor's photo (recommended: 800x1000px portrait)
2. Save it as `pastor.jpg` in: `src/assets/images/pastor/`
3. That's it! The website will automatically use it.

## Step 2: Add Gallery Photos
1. Get 8 photos of church activities
2. Rename them to match these names:
   - `sunday-worship.jpg`
   - `youth-fellowship.jpg`
   - `children-ministry.jpg`
   - `baptism-ceremony.jpg`
   - `prayer-meeting.jpg`
   - `community-outreach.jpg`
   - `worship-team.jpg`
   - `bible-study.jpg`
3. Place all of them in: `src/assets/images/gallery/`
4. The website will automatically display them!

## Important Notes
- **File formats**: Use `.jpg`, `.png`, or `.webp`
- **File names**: Must match exactly (lowercase, with hyphens)
- **Placeholder images**: Until you add your own images, the site will show errors. That's normal!
- **Image optimization**: Compress images before adding to keep the site fast

## Need to Add More Gallery Photos?
1. Add the image file to `src/assets/images/gallery/`
2. Open `src/config/churchInfo.js`
3. Add an import at the top: `import gallery9 from '../assets/images/gallery/your-image.jpg';`
4. Add a new object to the `gallery` array with the imported image

## Folder Structure
```
src/
  assets/
    images/
      pastor/
        pastor.jpg          ← Your pastor's photo goes here
      gallery/
        sunday-worship.jpg  ← Your gallery photos go here
        youth-fellowship.jpg
        ... (8 total)
```

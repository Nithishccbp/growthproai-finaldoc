const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

const sampleHeadlines = [
  "Why Cake & Co is Mumbai's Sweetest Spot in 2025",
  "Discover Why Cake & Co is the Talk of Mumbai!",
  "Sweet Success: How Cake & Co Became a Local Favorite"
]

app.post('/business-data', (req, res) => {
  res.json({
    rating: 4.3,
    reviews: 127,
    headline: sampleHeadlines[0]
  })
})

app.get('/regenerate-headline', (req, res) => {
  const random = Math.floor(Math.random() * sampleHeadlines.length)
  res.json({ headline: sampleHeadlines[random] })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})

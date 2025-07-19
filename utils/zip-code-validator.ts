// This file will contain the logic to validate zip codes based on the provided CSV data
// For now, we'll create a reference document with the logic for zip code validation

/**
 * Zip Code Validator for Sanders Lawnscapes
 *
 * Service Area:
 * - All zip codes within Cobb County
 * - All zip codes within Cherokee County
 * - All zip codes within a 40-mile radius of Marietta, GA
 *
 * Marietta, GA coordinates: approximately 33.9526° N, 84.5499° W
 *
 * The CSV file contains mappings of zip codes to counties.
 * We'll use this data to determine if a zip code is within our service area.
 *
 * Implementation steps:
 * 1. Parse the CSV data to create a mapping of zip codes to counties
 * 2. For zip codes not in Cobb or Cherokee counties, calculate distance from Marietta
 * 3. Return true if the zip code is in our service area, false otherwise
 */

// Marietta, GA coordinates
const MARIETTA_LAT = 33.9526
const MARIETTA_LON = -84.5499

// Service radius in miles
const SERVICE_RADIUS = 40

// Counties we service regardless of distance
const SERVICE_COUNTIES = ["Cobb", "Cherokee"]

// Function to calculate distance between two coordinates using Haversine formula
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3958.8 // Earth's radius in miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = R * c
  return distance
}

// Sample zip code data structure (to be populated from CSV)
interface ZipCodeData {
  zipCode: string
  county: string
  latitude?: number
  longitude?: number
}

// This would be populated from the CSV file
const zipCodeDatabase: Record<string, ZipCodeData> = {}

// Function to check if a zip code is in our service area
export function isInServiceArea(zipCode: string): boolean {
  // If we don't have data for this zip code, default to false
  if (!zipCodeDatabase[zipCode]) {
    return false
  }

  const zipData = zipCodeDatabase[zipCode]

  // If the zip code is in one of our service counties, return true
  if (SERVICE_COUNTIES.includes(zipData.county)) {
    return true
  }

  // If we have coordinates for this zip code, check the distance from Marietta
  if (zipData.latitude && zipData.longitude) {
    const distance = calculateDistance(MARIETTA_LAT, MARIETTA_LON, zipData.latitude, zipData.longitude)

    return distance <= SERVICE_RADIUS
  }

  // Default to false if we can't determine
  return false
}

// For demo purposes, let's add some sample zip codes that are in our service area
export const SAMPLE_SERVICE_AREA_ZIPS = [
  "30060",
  "30061",
  "30062",
  "30063",
  "30064",
  "30065",
  "30066",
  "30067",
  "30068",
  "30069", // Marietta
  "30101",
  "30102",
  "30103",
  "30114",
  "30115",
  "30142",
  "30188", // Cherokee County
  "30080",
  "30082",
  "30126",
  "30127",
  "30106",
  "30168", // Other Cobb County
  "30339",
  "30327",
  "30305",
  "30318",
  "30319",
  "30342", // Atlanta area within radius
]

// For demo purposes, we'll use this function instead of the full implementation
export function checkZipCode(zipCode: string): boolean {
  return SAMPLE_SERVICE_AREA_ZIPS.includes(zipCode)
}

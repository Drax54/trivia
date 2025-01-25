// import { Question } from '../types';

// export const physicsQuestions: Question[] = [
//   {
//     id: 'phys1',
//     category: 'science',
//     subQuizId: 'physics-mechanics',
//     question: "What is Newton's First Law of Motion?",
//     answer: "An object remains at rest or in uniform motion unless acted upon by an external force",
//     options: [
//       "An object remains at rest or in uniform motion unless acted upon by an external force",
//       "Force equals mass times acceleration",
//       "For every action there is an equal and opposite reaction",
//       "Objects fall at the same rate regardless of mass"
//     ],
//     difficulty: 'medium',
//     tags: ['physics', 'mechanics', 'newton laws']
//   },
//   {
//     id: 'phys2',
//     category: 'science',
//     subQuizId: 'physics-mechanics',
//     question: "What is the SI unit of force?",
//     answer: "Newton",
//     options: ["Newton", "Joule", "Pascal", "Watt"],
//     difficulty: 'easy',
//     tags: ['physics', 'units', 'mechanics']
//   },
//   {
//     id: 'phys3',
//     category: 'science',
//     subQuizId: 'physics-mechanics',
//     question: "What is the formula for kinetic energy?",
//     answer: "½mv²",
//     options: ["½mv²", "mgh", "F=ma", "P=mv"],
//     difficulty: 'medium',
//     tags: ['physics', 'energy', 'mechanics']
//   },
//   {
//     id: 'phys4',
//     category: 'science',
//     subQuizId: 'physics-mechanics',
//     question: "What type of lens is used to correct nearsightedness?",
//     answer: "Concave lens",
//     options: ["Concave lens", "Convex lens", "Plano-convex lens", "Cylindrical lens"],
//     difficulty: 'medium',
//     tags: ['physics', 'optics', 'lenses']
//   },
//   {
//     id: 'phys5',
//     category: 'science',
//     subQuizId: 'physics-mechanics',
//     question: "What is the unit of electrical resistance?",
//     answer: "Ohm",
//     options: ["Ohm", "Ampere", "Volt", "Watt"],
//     difficulty: 'easy',
//     tags: ['physics', 'electricity', 'units']
//   },
//   {
//     id: 'phys6',
//     category: 'science',
//     subQuizId: 'physics-mechanics',
//     question: "What is the second law of thermodynamics?",
//     answer: "Entropy of an isolated system always increases.",
//     options: [
//       "Entropy of an isolated system always increases.",
//       "Energy cannot be created or destroyed.",
//       "Heat flows from cold to hot.",
//       "Work done is always positive."
//     ],
//     difficulty: 'hard',
//     tags: ['physics', 'thermodynamics', 'entropy']
//   },
//   {
//     id: 'phys7',
//     category: 'science',
//     subQuizId: 'physics-mechanics',
//     question: "What is the formula for acceleration?",
//     answer: "Change in velocity divided by time",
//     options: [
//       "Change in velocity divided by time",
//       "Mass times velocity",
//       "Force divided by mass",
//       "Displacement divided by time"
//     ],
//     difficulty: 'easy',
//     tags: ['physics', 'mechanics', 'formulas']
//   },
//   {
//     id: 'phys8',
//     category: 'science',
//     subQuizId: 'physics-mechanics',
//     question: "Which color of light has the shortest wavelength?",
//     answer: "Violet",
//     options: ["Violet", "Red", "Green", "Blue"],
//     difficulty: 'medium',
//     tags: ['physics', 'optics', 'light']
//   },
//   {
//     id: 'phys9',
//     category: 'science',
//     subQuizId: 'physics-electricity',
//     question: "What is the SI unit of electric current?",
//     answer: "Ampere",
//     options: ["Ampere", "Ohm", "Watt", "Coulomb"],
//     difficulty: 'easy',
//     tags: ['physics', 'electricity', 'units']
//   },
//   {
//     id: 'phys10',
//     category: 'science',
//     subQuizId: 'physics-gravity',
//     question: "What is the value of gravitational acceleration on Earth?",
//     answer: "9.8 m/s²",
//     options: ["9.8 m/s²", "10 m/s²", "9.6 m/s²", "8.9 m/s²"],
//     difficulty: 'medium',
//     tags: ['physics', 'gravity', 'acceleration']
//   },
//   {
//     id: 'phys11',
//     category: 'science',
//     subQuizId: 'physics-mechanics',
//     question: "What is the formula for momentum?",
//     answer: "Mass × Velocity",
//     options: ["Mass × Velocity", "Force × Distance", "Mass × Acceleration", "Work ÷ Time"],
//     difficulty: 'medium',
//     tags: ['physics', 'momentum', 'mechanics']
//   },
//   {
//     id: 'phys12',
//     category: 'science',
//     subQuizId: 'physics-waves',
//     question: "What is the unit of frequency?",
//     answer: "Hertz",
//     options: ["Hertz", "Decibel", "Newton", "Watt"],
//     difficulty: 'easy',
//     tags: ['physics', 'waves', 'frequency']
//   },
//   {
//     id: 'phys13',
//     category: 'science',
//     subQuizId: 'physics-mechanics',
//     question: "What does Hooke's Law state?",
//     answer: "Force is directly proportional to extension.",
//     options: [
//       "Force is directly proportional to extension.",
//       "Force equals mass times acceleration.",
//       "Work equals force times distance.",
//       "Displacement is proportional to time."
//     ],
//     difficulty: 'medium',
//     tags: ['physics', 'mechanics', 'elasticity']
//   },
//   {
//     id: 'phys14',
//     category: 'science',
//     subQuizId: 'physics-electricity',
//     question: "What is the formula for electric power?",
//     answer: "Power = Voltage × Current",
//     options: ["Power = Voltage × Current", "Power = Resistance × Current", "V = IR", "P = VI²"],
//     difficulty: 'easy',
//     tags: ['physics', 'electricity', 'formulas']
//   },
//   {
//     id: 'phys15',
//     category: 'science',
//     subQuizId: 'physics-thermodynamics',
//     question: "What is absolute zero in Kelvin?",
//     answer: "0 K",
//     options: ["0 K", "-273.15 K", "273.15 K", "-100 K"],
//     difficulty: 'hard',
//     tags: ['physics', 'thermodynamics', 'temperature']
//   },
//   {
//     id: 'phys16',
//     category: 'science',
//     subQuizId: 'physics-waves',
//     question: "What type of wave is sound?",
//     answer: "Longitudinal",
//     options: ["Longitudinal", "Transverse", "Standing", "Surface"],
//     difficulty: 'medium',
//     tags: ['physics', 'waves', 'sound']
//   },
//   {
//     id: 'phys17',
//     category: 'science',
//     subQuizId: 'physics-gravity',
//     question: "What is the escape velocity from Earth?",
//     answer: "11.2 km/s",
//     options: ["11.2 km/s", "9.8 km/s", "8.5 km/s", "12.5 km/s"],
//     difficulty: 'hard',
//     tags: ['physics', 'gravity', 'space']
//   },
//   // Add additional questions here following the same structure
// ];


// export const mathematicsQuestions: Question[] = [
//   {
//     id: 'math1',
//     category: 'science',
//     subQuizId: 'ai-mathematics',
//     question: "What is the derivative of e^x?",
//     answer: "e^x",
//     options: ["e^x", "xe^(x-1)", "ln(x)", "1/x"],
//     difficulty: 'hard',
//     tags: ['mathematics', 'calculus', 'derivatives']
//   },
//   {
//     id: 'math2',
//     category: 'science',
//     subQuizId: 'ai-mathematics',
//     question: "What is the dot product of two vectors?",
//     answer: "A scalar quantity",
//     options: ["A scalar quantity", "A vector quantity", "A matrix", "A tensor"],
//     difficulty: 'medium',
//     tags: ['mathematics', 'vectors', 'linear algebra']
//   },
//   {
//     id: 'math3',
//     category: 'science',
//     subQuizId: 'ai-mathematics',
//     question: "What is the probability of getting heads in two consecutive coin flips?",
//     answer: "1/4",
//     options: ["1/4", "1/2", "1/3", "1/8"],
//     difficulty: 'medium',
//     tags: ['mathematics', 'probability', 'statistics']
//   }
// ];

// export const class10Questions: Question[] = [
//   {
//     id: 'c10-1',
//     category: 'science',
//     subQuizId: 'class-10-science',
//     question: "What is the chemical formula for photosynthesis?",
//     answer: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
//     options: [
//       "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
//       "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O",
//       "6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O",
//       "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂"
//     ],
//     difficulty: 'medium',
//     tags: ['biology', 'photosynthesis', 'class 10']
//   },
//   {
//     id: 'c10-2',
//     category: 'science',
//     subQuizId: 'class-10-science',
//     question: "What is the valency of carbon?",
//     answer: "4",
//     options: ["2", "3", "4", "5"],
//     difficulty: 'easy',
//     tags: ['chemistry', 'valency', 'class 10']
//   },
//   {
//     id: 'c10-3',
//     category: 'science',
//     subQuizId: 'class-10-science',
//     question: "Which mirror is used in a vehicle's headlights?",
//     answer: "Concave mirror",
//     options: ["Concave mirror", "Convex mirror", "Plane mirror", "Cylindrical mirror"],
//     difficulty: 'easy',
//     tags: ['physics', 'optics', 'class 10']
//   }
// ];
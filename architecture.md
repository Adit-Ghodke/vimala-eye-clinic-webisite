# Vimala Eye Hospital - Backend Architecture Spec

## 1. Data Schema (PostgreSQL Entity-Relationship)

### Table: `doctors`
| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | UUID (PK) | Primary Key |
| `name` | VARCHAR(100) | Full Name |
| `qualifications` | TEXT | Medical degrees |
| `specialty_id` | UUID (FK) | Reference to specialties |
| `bio` | TEXT | Long-form bio |
| `photo_url` | TEXT | CDN link to photo |
| `is_lead` | BOOLEAN | Lead doctor flag |

### Table: `appointments`
| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | UUID (PK) | Primary Key |
| `patient_name` | VARCHAR(100) | Patient Name |
| `phone_number` | VARCHAR(15) | Contact Info |
| `doctor_id` | UUID (FK) | Target doctor |
| `appointment_date`| DATE | Requested date |
| `status` | ENUM | [PENDING, CONFIRMED, COMPLETED, CANCELLED] |

## 2. API Endpoint Specification (RESTful)

| Endpoint | Method | Purpose |
| :--- | :--- | :--- |
| `/api/v1/doctors` | GET | List all doctors with specialty join |
| `/api/v1/doctors/:id` | GET | Single doctor detail |
| `/api/v1/appointments` | POST | Request a new appointment |
| `/api/v1/health-guide` | GET | Fetch articles from CMS |

## 3. Performance & Security Patterns
- **Rate Limiting**: 100 requests / 15 mins per IP (via Helmet/Express-rate-limit).
- **Caching**: Redis layer for `GET /doctors` (TTL: 1 Hour).
- **Validation**: Zod schema validation on all POST requests.

# NaTeSA Website - Scalable Roadmap

NaTeSA (Nazareth Tertiary Students Association) is a platform for university students to connect, access resources, and participate in events. This project implements a scalable, modular React frontend with admin and user responsibilities.

## Features

### Public Features
- **Home Page**: Professional landing page with latest news, upcoming events, and membership CTA
- **About Us**: Leadership team showcase with mission, achievements, and photo gallery
- **News Feed**: Latest announcements and updates from NaTeSA
- **Events**: Browse, RSVP, and view detailed event information
- **Resources**: Search, download, and browse study materials
- **Membership**: Apply for student membership with branch selection and status tracking

### Admin Features (BEC/NEC Committee)
- **Dashboard**: Comprehensive analytics and overview
- **Member Management**: Full CRUD with approval/rejection, alumni tracking, and branch filtering
- **Event Management**: Complete CRUD operations for event creation and management
- **News Management**: Full CRUD for announcements and updates
- **Resource Management**: Complete CRUD for study materials and documents
- **Role-Based Access**: Different permission levels for BEC and NEC members

### Authentication & User Management
- **Role-Based Authentication**: Student, BEC Committee, NEC Member roles
- **Auto-Login**: Immediate login after registration
- **Branch Selection**: Academic branch assignment during registration
- **Alumni System**: Track graduated members by branch and year
- **Permission Hierarchy**: Granular access control based on user roles

## Architecture

### Modular Structure
- **Components**: Reusable UI components (buttons, modals, forms)
- **Layouts**: Page layouts for different user roles
- **Pages**: Route-based pages with specific functionalities
- **Services**: API service wrappers
- **Hooks**: Custom React hooks for logic reuse
- **State**: Context-based state management

### Security Considerations
- Role-based access control (RBAC)
- Authentication middleware
- HTTPS enforcement
- Input validation and sanitization
- CSRF protection
- Regular security audits

### AI-Powered Features Roadmap
- Personalized event recommendations
- NLP-powered chatbot for student queries
- Automated content tagging for resources
- Predictive analytics for attendance
- AI-driven sponsor matching

### Growth & Scalability
- Modular component architecture for easy extension
- Service layer abstraction for backend integration
- Responsive design for mobile and desktop
- Performance optimization with lazy loading
- Internationalization support

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Testing the Application

### Test User Accounts

The application includes pre-configured test users for different roles:

| User | Email | Password | Role | Status | Access Level |
|------|-------|----------|------|--------|--------------|
| **John Doe** | `john@example.com` | `any password` | Student Member | Active | View content, RSVP to events |
| **Jane Smith** | `jane@example.com` | `any password` | BEC Committee | Active | Full admin access (CRUD operations) |
| **Bob Johnson** | `bob@example.com` | `any password` | NEC Member | Alumni | Full admin access (CRUD operations) |
| **Master Admin** | `master@natessa.org` | `any password` | Master Admin | Active | **Supreme admin access (bulk operations, account management)** |

### How to Test Authentication

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open the application** at `http://localhost:5174`

3. **Test different user roles:**
   - **Student Login:** Use `john@example.com` → Access public content only
   - **Admin Login:** Use `jane@example.com` or `bob@example.com` → Access admin dashboard
   - **Registration:** Click "Join Now" to create new users with auto-login

### Features to Test

#### For Students:
- ✅ View homepage with latest news and events
- ✅ Browse and RSVP to events
- ✅ Access resources and download materials
- ✅ Apply for membership
- ✅ View about page and leadership team

#### For Administrators (BEC/NEC):
- ✅ Full CRUD operations on all content
- ✅ Member management (approve/reject/move to alumni)
- ✅ Event management (create/edit/delete)
- ✅ News management (create/edit/delete)
- ✅ Resource management (create/edit/delete)
- ✅ Branch and role-based filtering

### Mock Authentication Notes

- **Any password works** - the system validates against email only
- **Approved and Alumni members** can login (graduated members retain admin access)
- **Role-based redirects** automatically send users to appropriate dashboards
- **Alumni system** tracks graduated members by branch and year
- **Branch selection** available during registration and admin management

### Master Admin Features

The **Master Admin** role provides supreme administrative control with advanced features:

#### Bulk Operations
- **Select All Members/Events/News/Resources** for mass operations
- **Block/Unblock Members** in bulk
- **Delete Multiple Items** across all content types
- **Bulk Alumni Management** for graduation processing

#### Advanced Account Management
- **Account Blocking**: Temporarily disable user accounts
- **Role Management**: Override and modify user roles
- **Access Control**: Grant/revoke permissions across the system
- **Audit Trail**: Track all administrative actions

#### System-Wide Operations
- **Global Content Management**: Access all documents and resources
- **User Analytics**: Comprehensive user behavior insights
- **System Health Monitoring**: Performance and usage statistics
- **Emergency Controls**: System-wide lockdown capabilities

#### Testing Features
- **Select Everyone Option**: For broadcasting announcements or conducting system-wide tests
- **Mass Communication**: Send notifications to all users
- **Bulk User Operations**: Process multiple users simultaneously

## Project Structure

```
src/
├── components/
│   ├── ui/          # Reusable UI components
│   ├── cards/       # Data display cards
│   └── charts/      # Analytics charts
├── layouts/         # Page layouts
├── pages/           # Route components
├── services/        # API services
├── hooks/           # Custom hooks
├── state/           # State management
└── data/            # Mock data
```

## Technologies Used

- React 19
- React Router DOM
- Custom CSS with CSS Variables (Design System)
- Google Fonts (Inter & Playfair Display)
- Vite
- ESLint

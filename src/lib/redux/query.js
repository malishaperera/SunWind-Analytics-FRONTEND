import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const baseUrl = "http://localhost:3000/api";
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: async (headers) => {
            const clerk = window.Clerk;

            if (!clerk || !clerk.session) return headers;

            const token = await clerk.session.getToken();

            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
        endpoints: (build) => ({
            getEnergyGenerationRecordsBySolarUnit: build.query({
            query: ({id,groupBy,limit=31}) => `/energy-generation-records/solar-unit/${id}?groupBy=${groupBy}&limit=${limit}`,
            }),
            getSolarUnitForUser: build.query({
            query: () => `/solar-units/me`,
            }),
            getSolarUnits: build.query({
                query: () => `/solar-units`,
            }),
            getSolarUnitById: build.query({
                query: (id) => `/solar-units/${id}`,
            }),
            createSolarUnit: build.mutation({
                query: (data) => ({
                    url: `/solar-units`,
                    method: "POST",
                    body: data,
                }),
            }),
            editSolarUnit: build.mutation({
                query: ({id, data}) => ({
                    url: `/solar-units/${id}`,
                    method: "PUT",
                    body: data,
                }),
            }),
            getAllUsers: build.query({
                query: () => `/users`,
            }),
            getCurrentWeather: build.query({
                query: ({ lat, lon }) =>
                    `/weather/current?lat=${lat}&lon=${lon}`,
            }),

            getAnomalies: build.query({
                query: () => `/anomalies`,  
            }),
            getAnomalyTrend: build.query({
                query: (range) => `/anomalies/trend?range=${range}`,
            }),

            createCheckoutSession: build.mutation({
                query: (invoiceId) => ({
                    url: "/payments/create-checkout-session",
                    method: "POST",
                    body: { invoiceId },
                }),
            }),

            getInvoices: build.query({
                query: () => "/invoices",
            }),

            getInvoiceById: build.query({
                query: (id) => `/invoices/${id}`,
            }),

            getSessionStatus: build.query({
                query: (sessionId) =>
                    `/payments/session-status?session_id=${sessionId}`,
            }),

        }),
    })

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetEnergyGenerationRecordsBySolarUnitQuery,
    useGetSolarUnitForUserQuery,
    useGetSolarUnitsQuery,
    useGetSolarUnitByIdQuery,
    useCreateSolarUnitMutation,
    useEditSolarUnitMutation,
    useGetAllUsersQuery,
    useGetCurrentWeatherQuery,
    useGetAnomaliesQuery,
    useGetAnomalyTrendQuery,
    useCreateCheckoutSessionMutation,
    useGetInvoicesQuery,
    useGetInvoiceByIdQuery,
    useGetSessionStatusQuery,

} = api;
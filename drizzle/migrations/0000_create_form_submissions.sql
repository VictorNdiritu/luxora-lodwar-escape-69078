CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_submissions TO anon;
GRANT INSERT ON public.contact_submissions TO authenticated;
GRANT ALL ON public.contact_submissions TO service_role;

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions FOR INSERT TO anon, authenticated
WITH CHECK (true);

CREATE TABLE public.reservation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  check_in date NOT NULL,
  check_out date NOT NULL,
  room_type text NOT NULL,
  guests integer NOT NULL,
  special_requests text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.reservation_requests TO anon;
GRANT INSERT ON public.reservation_requests TO authenticated;
GRANT ALL ON public.reservation_requests TO service_role;

ALTER TABLE public.reservation_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a reservation request"
ON public.reservation_requests FOR INSERT TO anon, authenticated
WITH CHECK (true);
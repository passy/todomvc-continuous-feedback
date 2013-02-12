# Components

The following components are typically found in a continuous feedback system:

<img src="https://docs.google.com/drawings/d/16WzUiSKC4s0E3E8jvCLGMQb30TRqx44Y8DPZzZnx2Us/pub?w=1170&amp;h=948">

1. Developer workstations 
  a. Text editor
  b. Local working copy source code repository
  c. Watcher process
  d. Build script
  e. Local HTTP server
  f. Test runner
  g. Set of browsers open for manual inspection
  h. Set of browsers slaved to test runner (f)

2. Source code repository

3. Continuous integration server
  a. Master build
  b. Trigger deploy to QA process
  c. Manual trigger deploy to Production process

4. Browser farm
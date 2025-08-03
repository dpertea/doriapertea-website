// src/views/Resume.tsx
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  Box,
  Container,
  Typography,
  Button,
  Pagination,
  Stack,
} from "@mui/material";
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

const Resume: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Document
          file={`${window.location.origin}/Resume.pdf`}
          onLoadSuccess={handleDocumentLoadSuccess}
        >
          <Page
            pageNumber={pageNumber}
            width={600}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>

        {numPages && numPages > 1 && (
          <Stack spacing={2} sx={{ mt: 2 }} alignItems="center">
            <Pagination
              count={numPages}
              page={pageNumber}
              onChange={(_, val) => setPageNumber(val)}
              color="primary"
            />
          </Stack>
        )}

        <Button
          component="a"
          href="/Resume.pdf"
          download
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "accent.main",
            "&:hover": {
              backgroundColor: "accent.dark",
            },
          }}
        >
          Download PDF
        </Button>
      </Box>
    </Container>
  );
};

export default Resume;
